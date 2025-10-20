const v1 = new Map();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    let v3 = this;
    function f6(a7, a8, a9) {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            [v3] = v1;
            function f17() {
                return this;
            }
            function f18(a19) {
                function f20() {
                    return a13;
                }
                return [f20];
            }
            Object.defineProperty(this, "e", { get: f17, set: f18 });
            const v26 = new SharedArrayBuffer(10, { maxByteLength: 65537 });
            const v28 = new Int8Array(v26);
            v28[7] = v28;
            this.e = -1;
        }
        const v29 = new F11();
        return v29;
    }
    f6(f6, F2, Map);
    %OptimizeFunctionOnNextCall(f6);
}
new F2();
new F2();
new F2();
