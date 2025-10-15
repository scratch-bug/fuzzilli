function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                function F18() {
                    if (!new.target) { throw 'must be called with new'; }
                    const v22 = Array.prototype;
                    v22.forEach.call(v22, Object);
                }
                new F18();
            }
            new F14();
        }
        new F8(F0, this, this, F0);
        return F0;
    }
    f4(a2, f4, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v29 = new F0(F0, F0);
const v30 = new F0();
new F0(v29, v30);
