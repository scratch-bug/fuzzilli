function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            const v10 = [Infinity,Infinity,Infinity];
            v10[11] = Infinity;
            const v11 = v10[4];
            const v12 = v11 ?? 976374041;
            v12 | v12;
            Math.asinh(v11);
            return v12;
        }
        f8();
        f8.call();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
    this.toString(a3, F1, F1);
}
new F1(976374041, F1, F1);
