let v0 = 0;
class C1 {
}
function f2() {
    function f3() {
        const v4 = `
            ++v0;
            function f6() {
                return "🙌🏿";
            }
        `;
        return v4;
    }
    return f3;
}
function f8(a9) {
    return a9;
}
Object.defineProperty(C1, "toString", { configurable: true, enumerable: true, get: f2, set: f8 });
class C10 {
}
const v12 = new BigInt64Array();
v12.slice(C10, C1);
