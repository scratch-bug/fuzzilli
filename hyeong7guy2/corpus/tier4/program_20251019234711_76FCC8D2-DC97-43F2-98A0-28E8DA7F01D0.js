function f0() {
    return f0;
}
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F1(F1, f0, F1, F1);
const v8 = [-631.2779217677911];
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    function f15() {
        return a13;
    }
    const v16 = `
        try {
            const v19 = class extends Date {
            }
            \`-63824\`;
            typeof f0 === "symbol";
            v19 === v7;
        } catch(e25) {
            new f15(e25, Uint8ClampedArray, ...v8, ...v16);
        }
    `;
    eval(v16);
}
new F9();
