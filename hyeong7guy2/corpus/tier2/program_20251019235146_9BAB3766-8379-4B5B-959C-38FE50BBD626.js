for (let i = 0; i < 5; i++) {
    const v3 = Symbol.iterator;
    const v18 = {
        [v3]() {
            const v17 = {
                next() {
                    const v7 = { done: 10 };
                    for (let i11 = (() => {
                            return Symbol === "function";
                            return 0;
                        })();
                        i11 < 65537;
                        ++i11) {
                    }
                    return v7;
                },
            };
            return v17;
        },
    };
    const v21 = new Int16Array(Date, 882, 882);
    function f22() {
        const v23 = new Date(WeakSet, Date, 882, ...v21, ...v18);
        return v23;
    }
    %OptimizeFunctionOnNextCall(f22);
    f22();
}
