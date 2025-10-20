function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        for (let v8 = 0; v8 < 5; v8++) {
        }
        function f9(a10, a11, a12) {
            let v14 = -229684853n;
            v14++;
            return BigInt.asIntN(5, v14);
        }
        const v18 = f9(a2, a5, F0);
        f9(v18);
        return v18;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v22 = new F0();
new F0(v22, F0);
