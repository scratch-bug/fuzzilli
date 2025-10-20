function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = [F0,F0,F0];
const v17 = {
    construct(a6, a7) {
        function f8() {
            function f9(a10) {
                return v4;
            }
            return f9;
        }
        function f11(a12) {
            return f11;
        }
        Object.defineProperty(a6, Symbol.toPrimitive, { configurable: true, get: f8, set: f11 });
        try { a7.fill(this, F0, a6); } catch (e) {}
        return Reflect;
    },
};
function f19() {
    return f19;
}
const v20 = new Proxy(f19, v17);
Reflect.construct(v20, v17);
