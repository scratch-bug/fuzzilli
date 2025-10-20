function f1() {
    return Symbol;
}
const v2 = Symbol.iterator;
const v15 = {
    [v2]() {
        const v14 = {
            next() {
                try { this.next(); } catch (e) {}
                const v7 = { done: 10 };
                for (let v8 = 0; v8 < 5; v8++) {
                    let v9 = v8 != v8;
                    for (let v10 = 0; v10 < 5; v10++) {
                        const v12 = v9 / 4;
                        v12 * v12;
                        v9 = v12;
                    }
                }
                return v7;
            },
        };
        return v14;
    },
};
f1.bind(null, ...v15);
