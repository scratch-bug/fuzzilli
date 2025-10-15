function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8(a9, a10) {
            let v11 = 10;
            const v12 = v11 >>> v11;
            for (let i = 0; i < 5; i++) {
                v11--;
                v12 + v12;
            }
            return F0;
        }
        new Promise(f8);
        return f8;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v18 = new F0();
const v19 = v18.constructor;
const v20 = new v19(v19, v19, v19, v18);
new F0(v19, v20);
