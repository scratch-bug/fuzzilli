function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = {};
const v8 = {
    a: 1,
    done: F0,
    [1]() {
    },
    next() {
        return v4;
    },
};
Object.assign(v4, v8);
