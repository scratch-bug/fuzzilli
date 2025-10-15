function f1() {
    function F3(a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v10 = new Int32Array(512);
    function F11(a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        function f15(a16) {
            const v17 = v10[7];
            F3.toString();
            new Uint8Array(v17);
            return F3;
        }
        %OptimizeMaglevOnNextCall(f15);
        f15();
    }
    new F11(Int32Array, f1);
}
const v22 = new f1();
const t19 = v22.constructor;
t19();
