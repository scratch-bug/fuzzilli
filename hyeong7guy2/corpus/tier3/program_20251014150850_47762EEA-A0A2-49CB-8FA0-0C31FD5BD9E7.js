function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a4(); } catch (e) {}
    const v8 = `
        const v9 = {};
        try {
            const v11 = class extends Date {
            }
            \`-63824\`;
        } catch(e13) {
        }
    `;
    eval(v8);
}
new F1(7, F1);
