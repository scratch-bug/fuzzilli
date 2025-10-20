const v2 = {};
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = {
    a: 255,
    done: F3,
    [1004]() {
    },
    next() {
        return this;
    },
};
const v11 = Object.assign(v2, v9);
const v13 = {
    ...v11,
    next() {
        return F3;
    },
};
