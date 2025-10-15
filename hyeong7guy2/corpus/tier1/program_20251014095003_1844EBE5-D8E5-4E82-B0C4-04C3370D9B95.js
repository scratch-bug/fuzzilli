const v0 = `
    const v3 = Symbol.iterator;
    const v9 = {
        [v3]() {
            const v8 = {
                next() {
                    return { done: 10 };
                },
            };
            return v8;
        },
    };
    Array.fromAsync(v9);
`;
eval(v0);
