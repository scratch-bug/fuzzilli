const v1 = [2518,2518,2518,2518,2518];
function f2(a3, a4) {
    return 2518;
}
v1[Symbol.toPrimitive] = f2;
Date.parse(v1);
