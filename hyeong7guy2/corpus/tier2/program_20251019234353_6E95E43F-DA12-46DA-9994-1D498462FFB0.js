const v2 = Symbol.iterator;
const v27 = {
    [v2]() {
        let v4 = 10;
        const v26 = {
            next() {
                v4--;
                function F8(a10, a11) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f12(a13, a14, a15) {
                        let [v16,v17,v18,v19] = arguments;
                        v16.length = v16;
                        v18.bind(Int32Array, a13);
                        return a13;
                    }
                    f12(f12, f12, a10);
                    %OptimizeFunctionOnNextCall(f12);
                }
                new F8(F8);
                const v24 = v4 == 0;
                return { done: v24 };
            },
        };
        return v26;
    },
};
class C28 extends Int32Array {
}
new C28(v27);
