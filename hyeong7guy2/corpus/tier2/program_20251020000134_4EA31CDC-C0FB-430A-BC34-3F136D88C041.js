function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let v8 = 0; v8 < 5; v8++) {
                const v9 = {};
                function f10(a11, a12) {
                    const v15 = new SharedArrayBuffer(7);
                    const v17 = new DataView(v15);
                    v17.setFloat16(v9, 11);
                    return 11;
                }
                f10();
                %OptimizeFunctionOnNextCall(f10);
            }
            return a6;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v20 = new F0();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
