function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v14 = /[a+b|c]/duygi;
            function f15(a16) {
                return a16;
            }
            v14.toString = f15;
            v14.toString();
        }
        new F8(a5, a7, a7, f4);
        return a6;
    }
    f4(this, a2, this);
    %OptimizeFunctionOnNextCall(f4);
}
const v20 = new F0(F0, F0);
new F0(v20, F0);
new F0();
