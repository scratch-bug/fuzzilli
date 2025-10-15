function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = {
    construct(a5, a6) {
        a6[1] = F0;
        return a6;
    },
};
function f9() {
    return v7;
}
const v10 = new Proxy(f9, v7);
const v11 = new v10();
v11.pop(v7, v10, f9, Proxy, f9);
