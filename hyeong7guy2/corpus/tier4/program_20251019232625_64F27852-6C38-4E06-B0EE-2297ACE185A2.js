function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        for (let v8 = 0; v8 < 5; v8++) {
            let v9 = 7;
            v9--;
            const v11 = v8 % v9;
            v11.c = v11;
        }
        return a3;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v13 = new F0();
const t15 = v13.constructor;
new t15();
new F0(v13, v13);
