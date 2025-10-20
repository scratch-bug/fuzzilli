const v1 = Symbol.iterator;
const v4 = {
    [v1]() {
    },
    get c() {
        return this;
    },
};
function f6() {
    const v10 = Symbol.iterator;
    const v30 = {
        [v10](a12, a13, a14) {
        },
        [v10]() {
            with (d8) {
                const v18 = test?.LeafInterfaceType;
                try { v18(); } catch (e) {}
                const t3 = test.FastCAPI;
                const v21 = new t3();
                for (const v22 in this) {
                }
                let v23;
                try { v23 = v21.pass_pointer(this); } catch (e) {}
                v23 ?? v23;
            }
            const v29 = {
                next() {
                    try { this.next(this, this, 10000); } catch (e) {}
                    return { done: 10000 };
                },
            };
            return v29;
        },
    };
    const v32 = new Int16Array();
    function f33() {
        const v34 = new Date(WeakSet, Date, -128, ...v32, ...v30);
        return v34;
    }
    f33();
    %PrepareFunctionForOptimization(f33);
    %OptimizeFunctionOnNextCall(f33);
    f33();
    return -128;
}
Uint8Array.toString = f6;
const v37 = [0.8609274506895804,7.4865079355344e+307,132923.23387164436];
const v39 = new Date(f6);
v39.setFullYear(v37, Uint8Array);
