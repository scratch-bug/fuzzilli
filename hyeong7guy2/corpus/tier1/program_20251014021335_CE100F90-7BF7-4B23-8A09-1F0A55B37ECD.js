class C0 {
}
function f1() {
    function f2() {
        const v3 = `
            function f4(a5) {
                return a5;
            }
            f4.toString();
        `;
        eval(v3);
        return v3;
    }
    return f2;
}
function f9(a10) {
    return f9;
}
Object.defineProperty(C0, "toString", { configurable: true, enumerable: true, get: f1, set: f9 });
class C11 {
}
const v13 = new BigInt64Array(C11);
v13.slice(C11, C0);
