function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = new SharedArrayBuffer();
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function F14(a16, a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                Uint32Array(v9);
            }
            try { F14(); } catch (e) {}
        }
        const v23 = new F10();
        const t13 = v23.constructor;
        new t13();
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
