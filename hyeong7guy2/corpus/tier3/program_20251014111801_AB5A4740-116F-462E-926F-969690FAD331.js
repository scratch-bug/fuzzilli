function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new BigInt64Array(512);
function f5() {
    return v4;
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        return v4[2];
    }
    a9[Symbol.toPrimitive] = f10;
    a9 - a9;
}
new F6(f5, F0);
