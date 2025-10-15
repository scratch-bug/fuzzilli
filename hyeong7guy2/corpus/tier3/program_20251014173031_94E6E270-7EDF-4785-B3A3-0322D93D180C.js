function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function* f14(a15, a16, a17, a18) {
                return a18;
            }
            try { new f14(); } catch (e) {}
        }
        new F8(F0, F8, F0, F0);
        return f4;
    }
    f4(F0, F0, a3);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0(F0, F0);
new F0();
