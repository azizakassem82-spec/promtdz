const fs = require('fs');

function parseCSV(text) {
    const rows = [];
    let row = [];
    let inQuotes = false;
    let field = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let nextChar = text[i + 1];

        if (char === '"') {
            if (inQuotes && nextChar === '"') {
                field += '"';
                i++; // skip next quote
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            row.push(field);
            field = '';
        } else if ((char === '\n' || char === '\r') && !inQuotes) {
            if (char === '\r' && nextChar === '\n') {
                i++;
            }
            if (field !== '' || row.length > 0) {
                row.push(field);
                rows.push(row);
                row = [];
                field = '';
            }
        } else {
            field += char;
        }
    }

    if (field !== '' || row.length > 0) {
        row.push(field);
        rows.push(row);
    }

    return rows;
}

try {
    const csvContent = fs.readFileSync('awesome-prompts.csv', 'utf8');
    const existing = JSON.parse(fs.readFileSync('src/data/prompts.json', 'utf8'));

    let maxId = Math.max(...existing.map(p => parseInt(p.id) || 0));

    const parsed = parseCSV(csvContent);
    let added = 0;

    // skip header row
    for (let i = 1; i < parsed.length; i++) {
        const row = parsed[i];
        if (row.length >= 2) {
            const act = row[0].trim();
            const prompt = row[1].trim();

            if (act && prompt) {
                maxId++;
                existing.push({
                    id: maxId.toString(),
                    title: "Act as " + act,
                    category: "prompts-chat",
                    description: "Awesome ChatGPT Prompts",
                    promptText: prompt,
                    isPremium: false
                });
                added++;
            }
        }
    }

    fs.writeFileSync('src/data/prompts.json', JSON.stringify(existing, null, 2));
    console.log("Successfully added " + added + " prompts from CSV!");
} catch (e) {
    console.error(e.message);
}
