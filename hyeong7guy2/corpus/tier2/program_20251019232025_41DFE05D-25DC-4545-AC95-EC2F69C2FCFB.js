function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f8() {
                return f5;
            }
            const v18 = {
                construct(a10, a11) {
                    const v14 = new SharedArrayBuffer(7);
                    const v16 = new DataView(v14);
                    v16.setInt32(a6, -9007199254740990);
                    return 7;
                },
            };
            v18.construct(f8);
            -9007199254740990 >> a2;
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v23 = new F0();
class C24 {
    static [v23](a26, a27, a28) {
    }
}
