function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = `
        try {
            const v8 = class extends Date {
            }
            \`-63824\`;
        } catch(e10) {
        }
    `;
    eval(v6);
}
new F0();
gc();
