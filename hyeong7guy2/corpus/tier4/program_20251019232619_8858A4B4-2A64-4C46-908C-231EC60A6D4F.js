function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        for (let v8 = 0; v8 < 5; v8++) {
            let v10 = v8 % 7;
            v10--;
            v10.c = v10;
        }
        return f4;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v13 = new F0();
const v14 = v13.constructor;
new v14(v13, v14, F0, v13, F0);
new F0();
