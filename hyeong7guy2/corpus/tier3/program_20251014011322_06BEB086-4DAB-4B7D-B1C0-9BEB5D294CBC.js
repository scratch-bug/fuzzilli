function f0() {
    return f0;
}
const v4 = {
    [f0](a2, a3) {
    },
};
const v14 = {
    a: 945488.4272421317,
    value: 0,
    [Symbol]() {
    },
    n(a10, a11, a12, a13) {
        return v4;
    },
    ...v4,
};
const v16 = Object.create(v14);
v16.toISOString = {};
