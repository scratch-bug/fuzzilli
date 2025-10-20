function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a5(); } catch (e) {}
    function f8() {
        function f9(a10) {
            const v11 = [976374041,976374041,976374041,976374041];
            v11[11] = Infinity;
            class C14 extends Float32Array {
            }
            const v17 = {
                [Symbol]() {
                    C14[-1] += 10;
                },
            };
            const v18 = v11[4];
            v18 | v18;
            return Math.asinh(v18);
        }
        f9();
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
    this.toString(a4);
}
new F1(976374041, F1, F1);
