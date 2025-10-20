const v0 = /(?<a>.)a||bc/dgmv;
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    a3.b = a3;
}
const v4 = new F1(v0);
v0.test(v4);
