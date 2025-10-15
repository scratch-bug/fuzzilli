function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = {};
const v8 = {
    a: -1073741824,
    done: F1,
    [-1073741824]() {
    },
    next() {
        return F1;
    },
};
Object.preventExtensions(v8);
Object.assign(v5, v8);
