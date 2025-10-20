function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let v7 = 0; v7 < 5; v7++) {
                const v9 = { maxByteLength: v7 };
                const v10 = new SharedArrayBuffer(v7, v9);
                const v12 = new BigInt64Array(v10);
                function f13(a14, a15, a16) {
                    return f5;
                }
                f13.apply(v9, v12);
            }
            return f5;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0(F0, F0);
v18.toString(F0, F0, v18, F0);
