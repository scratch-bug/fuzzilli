function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            class C15 {
                constructor(a17, a18) {
                    for (let v19 = 0; v19 < 5; v19++) {
                        super.b >>>= 4 % v19;
                    }
                }
            }
            new C15();
        }
        const v22 = new F8();
        return v22;
    }
    f4(F0, F0, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v24 = new F0(F0, F0);
const v25 = new F0(v24, v24);
new F0(v25, v24);
