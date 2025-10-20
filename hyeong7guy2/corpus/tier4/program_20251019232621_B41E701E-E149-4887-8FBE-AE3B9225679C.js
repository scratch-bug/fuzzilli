function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = {};
        for (let v9 = 0; v9 < 5; v9++) {
            const v12 = v9 % 7 ? 7 : v8;
            v12.c = v12;
            v9++;
        }
        return a2;
    }
    f4(f4, a3, a3);
    %OptimizeFunctionOnNextCall(f4);
}
const v15 = new F0(F0, F0);
const t15 = v15.constructor;
new t15();
new F0(F0, F0);
