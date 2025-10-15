function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
class C4 extends F0 {
}
const v5 = delete C4.b;
function f6() {
    return v5;
}
f6.prototype = v5;
