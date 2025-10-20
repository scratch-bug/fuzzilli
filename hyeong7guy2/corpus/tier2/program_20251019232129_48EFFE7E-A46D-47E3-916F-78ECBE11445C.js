const v1 = new BigInt64Array();
function f2(a3) {
    return true;
}
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
F5[Symbol.toPrimitive] = f2;
function f13() {
    return Intl;
}
const v15 = { construct: f13 };
const v16 = v15.construct(f13, v1, Symbol, v15);
const v17 = v16.NumberFormat;
v17(v16, v17).formatRangeToParts(F5, v1);
