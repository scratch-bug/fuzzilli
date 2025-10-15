const v1 = {};
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = {
    a: 12234,
    done: F2,
    [12234]() {
    },
    next() {
        return 12234;
    },
};
Object.assign(v1, v8);
v1.a = undefined;
