function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            let v14 = [];
            v14[0] = 1.1;
            for (let v16 = 0; v16 < 5; v16++) {
                const v18 = [v14[9]];
                v18[9] = a5;
                v14 = v18;
            }
        }
        const v19 = new F8();
        return v19;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v21 = new F0();
const v22 = new F0();
new F0(v22, v21);
