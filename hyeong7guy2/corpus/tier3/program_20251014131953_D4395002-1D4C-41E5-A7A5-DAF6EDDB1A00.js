class C1 {
}
function f2() {
    throw 13;
    return f2;
}
C1.toString = f2;
try { C1.constructor(C1); } catch (e) {}
