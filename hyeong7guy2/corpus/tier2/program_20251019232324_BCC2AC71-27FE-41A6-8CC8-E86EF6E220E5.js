function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
            }
            class C12 extends this.constructor {
            }
            const v13 = new C12();
            try { v13.toString(a7); } catch (e) {}
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v15 = new F4();
    class C16 {
        static [v15](a18, a19, a20) {
        }
    }
}
new F0(F0, F0);
