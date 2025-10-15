function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = {};
function f3(a4) {
    return a4;
}
v2.get = f3;
v2.__proto__ = F0;
