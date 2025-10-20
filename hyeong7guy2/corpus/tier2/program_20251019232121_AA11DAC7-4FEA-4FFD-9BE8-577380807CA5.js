function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = `
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            function f10() {
                const v12 = Symbol.iterator;
                const v20 = {
                    [v12]() {
                        const v19 = {
                            next() {
                                \`string${536870912n}undefined\`;
                                return { done: 10 };
                            },
                        };
                        return v19;
                    },
                };
                const v22 = new Int16Array();
                new Date(WeakSet, Date, 882, ...v22, ...v20);
                return F1;
            }
            const v24 = class extends f10 {
                static [v3](a26, a27, a28) {
                }
            }
            new v24();
        }
        new F6(F6, v3);
    `;
    eval(v3);
}
new F1();
