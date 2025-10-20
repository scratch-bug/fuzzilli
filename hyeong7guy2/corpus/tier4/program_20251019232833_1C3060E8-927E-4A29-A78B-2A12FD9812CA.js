function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    gc();
    const v8 = `
        function f9() {
            return F0;
        }
        try {
            const v11 = class extends Date {
            }
            \`-63824\`;
        } catch(e13) {
        }
        function f14(a15) {
            return a5;
        }
    `;
    eval(v8);
}
const v18 = new F0();
const t20 = v18.constructor;
new t20();
