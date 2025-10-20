function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            function f9() {
                const v12 = new SharedArrayBuffer(4096);
                const v14 = new Uint32Array(v12);
                v14[629];
                return a2;
            }
            Object.defineProperty(this, "toString", { get: f9 });
        }
        const v16 = new F5();
        class C17 {
            static [v16](a19, a20, a21) {
            }
        }
        return F0;
    }
    try { f4(); } catch (e) {}
}
new F0(F0, F0);
