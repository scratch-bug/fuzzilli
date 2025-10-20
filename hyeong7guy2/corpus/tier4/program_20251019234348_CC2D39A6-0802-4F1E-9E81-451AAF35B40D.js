function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f3(a4, a5) {
    return delete F0[1521149020];
}
Set[Symbol.toPrimitive] = f3;
try { JSON.parse(Set, Set); } catch (e) {}
