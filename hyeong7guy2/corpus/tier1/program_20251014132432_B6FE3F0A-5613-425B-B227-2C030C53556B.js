function f0(a1, a2, a3, a4) {
    a2.h = a2;
    return a1;
}
Set[Symbol.toPrimitive] = f0;
try { JSON.parse(Set); } catch (e) {}
