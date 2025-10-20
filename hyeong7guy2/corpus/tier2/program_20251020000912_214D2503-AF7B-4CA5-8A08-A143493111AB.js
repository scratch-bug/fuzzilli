function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            a16--;
            this.f = a16;
        }
        const v18 = new F11(Int8Array, 1825, F11, 1825);
        v18.c = -1;
        const t10 = v18.constructor;
        const v20 = new t10();
        v20.c = a5;
        return Int8Array;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
const v22 = new F2(-1, Int8Array);
new F2(-1, v22);
new F2();
