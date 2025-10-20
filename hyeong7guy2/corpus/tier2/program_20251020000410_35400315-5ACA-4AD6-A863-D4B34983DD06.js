const v2 = Symbol.iterator;
const v31 = {
    [v2]() {
        let v4 = 10;
        const v30 = {
            next() {
                const v6 = v4--;
                function F7(a9, a10) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f11(a12, a13, a14) {
                        for (let i17 = 0, i18 = 10; i18; i18--) {
                            v4 - i18;
                        }
                        return v6;
                    }
                    f11();
                    %OptimizeFunctionOnNextCall(f11);
                }
                new F7(Symbol, v4);
                const v28 = v4 == 0;
                return { done: v28 };
            },
        };
        return v30;
    },
};
class C32 extends Int32Array {
}
new C32(v31);
