function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = {};
const v8 = {
    a: 4294967297,
    done: F0,
    [4294967297]() {
    },
    toString() {
        return this;
    },
};
Object.assign(v4, v8);
