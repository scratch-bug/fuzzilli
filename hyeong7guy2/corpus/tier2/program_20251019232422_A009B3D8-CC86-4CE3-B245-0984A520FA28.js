class C0 {
}
const v1 = class extends C0 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7) {
        return a5;
    }
    Object.defineProperty(v1, "d", { configurable: true, enumerable: true, set: f6 });
    function f8(a9, a10) {
        let v11;
        try { v11 = v1.fromCodePoint(); } catch (e) {}
        return v11;
    }
    new Promise(f8);
}
new F2();
new F2(v1, F2);
new F2();
