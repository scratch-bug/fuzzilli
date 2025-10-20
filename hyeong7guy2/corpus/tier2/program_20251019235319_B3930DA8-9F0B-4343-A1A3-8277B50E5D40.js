function f0(a1) {
    function f2() {
        const v4 = String.prototype;
        v4.match();
        const v6 = v4.localeCompare;
        Object.defineProperty(v6, Symbol.toPrimitive, { writable: true, value: f0 });
        v6.apply(v6);
        return Symbol;
    }
    try { f2(); } catch (e) {}
    return f0;
}
f0(f0);
