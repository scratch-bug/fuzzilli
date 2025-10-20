function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        for (let v8 = 0; v8 < 5; v8++) {
            v8++;
            const v12 = (v8 % 7) / v8;
            v12 / v12;
        }
        return a2;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v16 = new F0();
const t15 = v16.constructor;
new t15();
