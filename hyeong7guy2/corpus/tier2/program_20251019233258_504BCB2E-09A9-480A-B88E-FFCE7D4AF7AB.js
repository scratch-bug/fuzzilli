const v2 = Symbol.iterator;
const v33 = {
    [v2]() {
        let v4 = 10;
        const v32 = {
            next() {
                v4--;
                function F7(a9, a10) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f11(a12, a13, a14) {
                        const v16 = Math.sin(a12);
                        for (let i19 = 0, i20 = 10; i20; i20--) {
                        }
                        return v16 ^ v16;
                    }
                    f11(this, F7, a9);
                    %OptimizeFunctionOnNextCall(f11);
                }
                new F7(v2, Int32Array);
                const v30 = v4 == 0;
                return { done: v30 };
            },
        };
        return v32;
    },
};
class C34 extends Int32Array {
}
new C34(v33);
