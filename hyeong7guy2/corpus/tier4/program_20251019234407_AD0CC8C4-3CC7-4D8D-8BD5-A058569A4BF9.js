function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                Object.create();
            }
            new F14();
        }
        new F8();
        return a5;
    }
    try { f4(); } catch (e) {}
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
