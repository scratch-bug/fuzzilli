function* f0(a1, a2, a3, a4) {
    return a3;
}
const v6 = class {
}
v6[Symbol.toPrimitive] = f0;
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    try { a10.propertyIsEnumerable(a10); } catch (e) {}
}
new F8(v6);
