const v2 = Symbol.iterator;
const v7 = {
    [v2]() {
        const v6 = {
            next() {
                return {};
            },
        };
        return v6;
    },
};
try {
    new Map(v7);
} catch(e9) {
}
