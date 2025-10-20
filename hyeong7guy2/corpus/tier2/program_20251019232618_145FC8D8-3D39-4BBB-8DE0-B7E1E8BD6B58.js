function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3) {
        const v4 = { ...this };
        try { v4.readbuffer(a3); } catch (e) {}
        return this;
    }
    function f6(a7, a8) {
        function f9() {
            function F10(a12, a13, a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                function f17() {
                    return a8;
                }
                WebAssembly.compileStreaming().catch(f17);
                globalThis.console.trace(F10);
            }
            new F10(this, f9, F0, F10);
            return F10;
        }
        class C24 extends f9 {
        }
        const v25 = new C24();
        return v25;
    }
    f2[Symbol.toPrimitive] = f6;
    f2(f2);
}
new F0();
