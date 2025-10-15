const v2 = {
    next() {
        const v1 = { ...this };
        return this;
    },
};
v2.next();
