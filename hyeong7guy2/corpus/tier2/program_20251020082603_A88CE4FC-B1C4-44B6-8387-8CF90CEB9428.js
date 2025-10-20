const v7 = {
    [Symbol]() {
        eval("");
    },
    get e() {
        return Symbol;
    },
};
