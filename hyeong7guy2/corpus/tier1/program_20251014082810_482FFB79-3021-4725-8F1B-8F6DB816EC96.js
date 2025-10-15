function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = {
    construct(a7, a8) {
        a8[1] = F0;
        Date.__proto__ = a8;
        return a8;
    },
};
function f11() {
    return f11;
}
const v12 = new Proxy(f11, v9);
const v13 = new v12();
v13.push(Symbol);
