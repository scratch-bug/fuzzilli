function f0(a1, a2) {
    const v5 = Symbol.iterator;
    const v28 = {
        [v5]() {
            gc();
            const v11 = Symbol.iterator;
            const v20 = {
                [v11]() {
                    const v19 = {
                        next() {
                            try {
                                super.toISOString();
                            } catch(e16) {
                                e16.stack = e16;
                            }
                            const v18 = {
                                done: Object,
                                ...this,
                                next() {
                                    return a1;
                                },
                            };
                            return v18;
                        },
                    };
                    return v19;
                },
            };
            function f22() {
                const v23 = new Date(WeakSet, Date, 882, ...v20);
                return v23;
            }
            f22.call(a1, f0, Date, WeakSet);
            const v27 = {
                next() {
                    return { done: 10 };
                },
            };
            return v27;
        },
    };
    const v31 = new Int16Array();
    new Date(Symbol, Date, 882, ...v31, ...v28);
    return f0;
}
f0();
f0.apply();
