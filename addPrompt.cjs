const fs = require('fs');
const file = './src/data/prompts.json';

try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    const maxId = Math.max(...data.map(p => parseInt(p.id) || 0));

    data.unshift({
        id: (maxId + 1).toString(),
        title: "Premium Sony A1 Cinematic Portrait Enhancement",
        category: "image-generation",
        description: "Enhance a portrait preserving identity with Sony A1 85mm f1.4 cinematic realism. Includes strictly defined setup, lighting, and negative commands.",
        promptText: `Enhance the portrait while strictly preserving the subject’s identity with accurate facial geometry. Do not change their expression or face shape. Only allow subtle feature cleanup without altering who they are. Keep the exact same background from the reference image. No replacements, no changes, no new objects, no layout shifts. The environment must look identical.\n\nThe image must be recreated as if it was shot on a Sony A1, using an 85mm f1.4 lens, at f1.6, ISO 100, 1/200 shutter speed, cinematic shallow depth of field, perfect facial focus, and an editorial-neutral color profile.\n\nThis Sony A1 + 85mm f1.4 setup is mandatory.\nThe final image must clearly look like premium full-frame Sony A1 quality.\n\nLighting must match the exact direction, angle, and mood of the reference photo. Upgrade the lighting into a cinematic, subject-focused style: soft directional light, warm highlights, cool shadows, deeper contrast, expanded dynamic range, micro-contrast boost, smooth gradations, and zero harsh shadows.\n\nMaintain neutral premium color tone, cinematic contrast curve, natural saturation, real skin texture (not plastic), and subtle film grain. No fake glow, no runway lighting, no over smoothing.\n\nRender in 4K resolution, 10-bit color, cinematic editorial style, premium clarity, portrait crop, and keep the original environmental vibe untouched.\n\nRe-render the subject with improved realism, depth, texture, and lighting while keeping identity and background fully preserved.\n\nNEGATIVE INSTRUCTIONS:\nNo new background.\nNo background change.\nNo overly dramatic lighting.\nNo face morphing.\nNo fake glow.\nNo flat lighting.\nNo over-smooth skin.`,
        isPremium: true
    });

    fs.writeFileSync(file, JSON.stringify(data, null, 2));
    console.log("Successfully added the new prompt!");
} catch (e) {
    console.error("Error modifying JSON:", e.message);
}
