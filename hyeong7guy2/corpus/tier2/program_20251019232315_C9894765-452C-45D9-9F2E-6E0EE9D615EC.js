function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v11 = new F7(this, F7);
            v11.constructor?.constructor;
            -9007199254740990 >> a2;
            const v20 = new ArrayBuffer(3725, { maxByteLength: 3725 });
            const v22 = new Float32Array(v20);
            v22.slice()[608];
            return 3725;
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v27 = new F0();
class C28 {
    static [v27](a30, a31, a32) {
    }
}
