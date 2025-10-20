const v3 = {
    next() {
        const v2 = { ...this };
        return this;
    },
};
Object.defineProperty(v3, Symbol, { writable: true, enumerable: true, value: v3 });
v3.next();
