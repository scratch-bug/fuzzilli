const v0 = {};
function f2() {
    return Proxy;
}
const v3 = new Proxy(f2, v0);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    a7[261];
    for (let i12 = 0, i13 = 10; i13; i13--) {
    }
}
new F5(v3);
new F5(BigUint64Array);
