function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6) {
        return F0;
    }
    function F7(a9) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f10() {
        return Symbol;
    }
    function f11(a12) {
        const v14 = d8.profiler;
        let v15;
        try { v15 = v14.setOnProfileEndListener(a3); } catch (e) {}
        return v15;
    }
    Object.defineProperty(F7, Symbol.toPrimitive, { enumerable: true, get: f10, set: f11 });
    F7[Symbol.toPrimitive] = f5;
}
new F0();
