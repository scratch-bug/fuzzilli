function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
        }
        let v14;
        try { v14 = F8.apply(F8, F8); } catch (e) {}
        return v14;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v16 = new F0();
new F0(v16, v16);
new F0();
