const v2 = Symbol.iterator;
const v22 = {
    [v2]() {
        let v4 = 10;
        const v21 = {
            next() {
                const v6 = v4--;
                function F7(a9, a10) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f11(a12, a13, a14) {
                        this[a10] &= v4;
                        delete this[a10];
                        return v6;
                    }
                    f11();
                    %OptimizeFunctionOnNextCall(f11);
                }
                new F7(F7, v2);
                const v19 = v4 == 0;
                return { done: v19 };
            },
        };
        return v21;
    },
};
class C23 extends Int32Array {
}
new C23(v22);
