const v1 = Symbol.keyFor;
try { new v1(Symbol); } catch (e) {}
const v6 = {
    next() {
        const v5 = {
            ...this,
            next() {
                return this;
            },
        };
        return this;
    },
};
