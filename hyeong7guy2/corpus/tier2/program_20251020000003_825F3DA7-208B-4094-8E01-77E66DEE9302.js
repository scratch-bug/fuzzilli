const v1 = `
    const v5 = Symbol.iterator;
    const v16 = {
        [v5]() {
            const v10 = {
                next() {
                    return { done: 10 };
                },
            };
            try {
                Array(-339025740);
            } catch(e14) {
                e14.stack;
            }
            return v10;
        },
    };
    const v18 = new Int16Array();
    new Date(WeakSet, Date, 882, ...v18, ...v16);
`;
eval(v1);
