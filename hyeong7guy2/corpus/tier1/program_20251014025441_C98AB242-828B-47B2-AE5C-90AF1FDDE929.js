class C0 {
}
function f1() {
    function f2() {
        const v3 = `
            function f5(a6, a7) {
                return C0;
            }
            const v10 = new Worker(f5, { type: "function" });
            v10.terminateAndWait();
            function f12(a13) {
                return a13;
            }
        `;
        return eval(v3);
    }
    return f2;
}
function f16(a17) {
    return a17;
}
Object.defineProperty(C0, "toString", { configurable: true, enumerable: true, get: f1, set: f16 });
class C18 {
}
const v20 = new BigInt64Array();
v20.slice(C18, C0);
