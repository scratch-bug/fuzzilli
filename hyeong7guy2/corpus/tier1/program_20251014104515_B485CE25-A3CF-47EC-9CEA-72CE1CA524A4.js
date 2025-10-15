const v1 = class {
}
function f2() {
    return 14;
}
v1[Symbol.toPrimitive] = f2;
function F5() {
    if (!new.target) { throw 'must be called with new'; }
    Temporal.Instant.compare(v1);
}
try { new F5(); } catch (e) {}
