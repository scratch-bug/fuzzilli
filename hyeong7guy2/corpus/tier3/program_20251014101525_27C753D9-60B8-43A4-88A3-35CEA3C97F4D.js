const v1 = class {
}
v1[Symbol.toPrimitive] = Symbol;
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = a10.constructor;
    try { v12.asIntN(v1); } catch (e) {}
}
new F6(Float32Array, true, 1102284067n);
