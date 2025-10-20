const v2 = Symbol.iterator;
const v25 = {
    [v2]() {
        let v4 = 10;
        const v24 = {
            next() {
                v4--;
                function F7(a9, a10) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f11(a12, a13, a14) {
                        for (let i = 0; i < 5; i++) {
                            Math.sin(a12);
                        }
                        return v4;
                    }
                    f11();
                    %OptimizeFunctionOnNextCall(f11);
                }
                new F7(F7, this);
                eval();
                const v22 = v4 == 0;
                return { done: v22 };
            },
        };
        return v24;
    },
};
class C26 extends Int32Array {
}
new C26(v25);
