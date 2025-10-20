function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = [-44763,64,-2147483647];
        let v10 = 0;
        while (v10 < 3) {
            v10++;
        }
        Array.apply(-1.7591900299113206e+308, v8);
        return this;
    }
    f4(this, F0, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v17 = new F0(F0, F0);
const v18 = new F0(v17, v17);
new F0(v18, v18);
