class C0 {
}
function f1() {
    const v2 = { getPrototypeOf: f1 };
    function f4(a5) {
        return a5;
    }
    function F6(a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        this.constructor = f4;
        function f11() {
            return f11;
        }
        function f12(a13) {
            return f4;
        }
        Object.defineProperty(a10, "length", { get: f11, set: f12 });
    }
    const v14 = new F6(F6, f4, f4);
    v14.constructor.bind();
    const v17 = new Proxy(C0, v2);
    v17.__proto__;
    return f1;
}
try { f1(); } catch (e) {}
