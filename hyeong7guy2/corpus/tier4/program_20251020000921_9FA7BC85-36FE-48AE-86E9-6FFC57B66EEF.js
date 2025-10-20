function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8(a9) {
            try { Math(a6); } catch (e) {}
        }
        const v12 = f8();
        v12 % v12;
        return f4;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
