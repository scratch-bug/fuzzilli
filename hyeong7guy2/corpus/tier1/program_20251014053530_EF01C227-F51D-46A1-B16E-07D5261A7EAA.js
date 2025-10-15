function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a14;
            }
            class C17 extends Uint16Array {
            }
            class C18 extends C17 {
            }
            const v19 = new C18();
            const v20 = class {
            }
            function F22(a24, a25) {
                if (!new.target) { throw 'must be called with new'; }
                const t17 = a25.constructor;
                new t17();
                this.b = Int16Array;
            }
            new F22(v20, v19);
            function f29(a30) {
                const v33 = new ArrayBuffer(16);
                new BigUint64Array(v33);
                return ArrayBuffer;
            }
            Object.defineProperty(this, "e", { get: f15, set: f29 });
            this.e = -1;
        }
        const v36 = new F9(f4, f4, a5, F0);
        return v36;
    }
    f4(this, F0, F0);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0(F0, F0);
new F0();
