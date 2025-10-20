const v1 = [2n,2n,2n,2n,2n];
function f2(a3) {
    return 2n;
}
v1[Symbol.toPrimitive] = f2;
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    a9 ^ a9;
}
new F6(F6, v1);
