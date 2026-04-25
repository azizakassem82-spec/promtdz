const fs = require('fs');
const file = './src/data/prompts.json';

try {
    let data = JSON.parse(fs.readFileSync(file, 'utf8'));
    let updatedCount = 0;

    data.forEach((p) => {
        if (p.description === 'Awesome ChatGPT Prompts Collection') {
            p.category = 'prompts-chat';
            updatedCount++;
        }
    });

    fs.writeFileSync(file, JSON.stringify(data, null, 2));
    console.log(`Successfully moved ${updatedCount} prompts to the prompts-chat category!`);
} catch (e) {
    console.error("Error modifying JSON:", e.message);
}
