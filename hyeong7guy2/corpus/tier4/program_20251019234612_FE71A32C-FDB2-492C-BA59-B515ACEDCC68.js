function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = {};
        for (let v9 = 0; v9 < 5; v9++) {
            const v11 = v9 % -1298641096;
            new ArrayBuffer();
            v11 ? -1298641096 : v8;
        }
        return this;
    }
    f4(F0, f4, a3);
    %OptimizeFunctionOnNextCall(f4);
}
const v16 = new F0(F0, F0);
const t15 = v16.constructor;
new t15();
new F0();
