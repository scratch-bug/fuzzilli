const v1 = [1000000000.0,1.009635286029162e+307];
class C2 {
}
function f3(a4, a5) {
    v1.length = a4;
    return v1;
}
C2[Symbol.toPrimitive] = f3;
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    try { a9.propertyIsEnumerable(a11); } catch (e) {}
}
new F7(F7, F7, C2);
