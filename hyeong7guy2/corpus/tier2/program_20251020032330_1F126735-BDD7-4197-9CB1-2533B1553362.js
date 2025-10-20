function f0(a1, a2) {
    try { a2(); } catch (e) {}
    const v8 = Symbol.iterator;
    const v18 = {
        [v8]() {
            let v10 = 10;
            const v17 = {
                next() {
                    v10 = 9223372036854775807;
                    const v12 = { done: v10 };
                    const v15 = (20000).constructor.isSafeInteger(v10);
                    class C16 {
                    }
                    C16.h = v15;
                    return v12;
                },
            };
            return v17;
        },
    };
    const v21 = new Int16Array();
    function f22() {
        const v23 = new Date(WeakSet, Date, 882, ...v21, ...v18);
        return v23;
    }
    f22();
    %OptimizeFunctionOnNextCall(f22);
    f22();
    return a1;
}
f0(f0, f0);
