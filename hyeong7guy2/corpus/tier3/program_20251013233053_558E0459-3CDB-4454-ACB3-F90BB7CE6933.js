function f0() {
    return f0;
}
class C1 extends f0 {
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6.caller;
}
new F2(C1, C1, F2);
