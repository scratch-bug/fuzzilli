function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = {};
        for (let v9 = 0; v9 < 5; v9++) {
            const v12 = v9 % -65536 ? -65536 : v8;
            v12.c = v12;
        }
        return v8;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v14 = new F0(F0, F0);
const t14 = v14.constructor;
new t14();
new F0(v14, F0);
