function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        return "🙌🏿";
    }
    function f6() {
        return a2;
    }
    Object.defineProperty(f6, Symbol.toPrimitive, { enumerable: true, value: f4 });
    class C9 extends f6 {
    }
    const v10 = `function${C9}bigint`;
    function f11() {
        return f6;
    }
    const v12 = f11.constructor;
    try { v12(v10); } catch (e) {}
}
new F0();
