const fs = require('fs');
const https = require('https');
const promptsPath = './src/data/prompts.json';
const pdf = require('pdf-parse');

const getExisting = () => JSON.parse(fs.readFileSync(promptsPath, 'utf8'));

async function importPdf() {
    try {
        let existing = getExisting();
        let maxId = Math.max(...existing.map(p => parseInt(p.id) || 0));

        if (fs.existsSync('./public/800ChatGPTPrompts.pdf')) {
            const dataBuffer = fs.readFileSync('./public/800ChatGPTPrompts.pdf');
            const data = await pdf(dataBuffer);

            // Very naive split based on typical prompt ebooks (split by multiple newlines or numbering)
            const chunks = data.text.split(/\n\s*\n/);

            let addedCount = 0;
            for (let chunk of chunks) {
                chunk = chunk.trim();
                // Filter out junk, headers, or extremely short lines
                if (chunk.length > 50 && chunk.length < 2000 && !chunk.toLowerCase().includes('table of contents')) {
                    maxId++;
                    existing.push({
                        id: maxId.toString(),
                        title: "Curated PDF Prompt " + maxId,
                        category: "writing",
                        description: "Imported from 800 ChatGPT Prompts Collection",
                        promptText: chunk.replace(/\\n/g, ' '),
                        isPremium: false
                    });
                    addedCount++;
                }
            }
            console.log(`Successfully added ${addedCount} prompts from 800 ChatGPT PDF!`);
        }

        if (fs.existsSync('./public/Google_VEO_3_Prompt_Playbook.pdf')) {
            const dataBuffer2 = fs.readFileSync('./public/Google_VEO_3_Prompt_Playbook.pdf');
            const data2 = await pdf(dataBuffer2);
            const chunks2 = data2.text.split(/\n\s*\n/);

            let addedCount2 = 0;
            for (let chunk of chunks2) {
                chunk = chunk.trim();
                if (chunk.length > 50 && chunk.length < 2000 && !chunk.toLowerCase().includes('table of contents')) {
                    maxId++;
                    existing.push({
                        id: maxId.toString(),
                        title: "Google VEO Prompt " + maxId,
                        category: "video",
                        description: "Imported from Google VEO 3 Prompt Playbook",
                        promptText: chunk.replace(/\\n/g, ' '),
                        isPremium: true
                    });
                    addedCount2++;
                }
            }
            console.log(`Successfully added ${addedCount2} prompts from Google VEO 3 PDF!`);
        }

        fs.writeFileSync(promptsPath, JSON.stringify(existing, null, 2));

    } catch (err) {
        console.error("PDF parse failed: ", err.message);
    }
}

function importCSV() {
    return new Promise((resolve, reject) => {
        https.get('https://raw.githubusercontent.com/f/awesome-chatgpt-prompts/main/prompts.csv', (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    let existing = getExisting();
                    let maxId = Math.max(...existing.map(p => parseInt(p.id) || 0));

                    // Simple custom CSV split handling quoted strings
                    const lines = data.split('\n').filter(line => line.trim() !== '');
                    let addedCount = 0;

                    for (let i = 1; i < lines.length; i++) {
                        const line = lines[i];
                        const firstComma = line.indexOf('","');
                        if (firstComma > -1) {
                            let act = line.substring(1, firstComma).replace(/"/g, '');
                            let promptText = line.substring(firstComma + 3, line.length - 1).replace(/""/g, '"');
                            if (act && promptText) {
                                maxId++;
                                existing.push({
                                    id: maxId.toString(),
                                    title: "Act as " + act,
                                    category: "business",
                                    description: "Awesome ChatGPT Prompts Collection",
                                    promptText: promptText,
                                    isPremium: false
                                });
                                addedCount++;
                            }
                        }
                    }
                    fs.writeFileSync(promptsPath, JSON.stringify(existing, null, 2));
                    console.log(`Successfully added ${addedCount} prompts from prompts.chat CSV!`);
                    resolve();
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

async function run() {
    console.log("Starting import runner...");
    await importCSV();
    await importPdf();
    console.log("Finished running all imports.");
}

run();
