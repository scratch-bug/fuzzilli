function f2() {
    return 9;
}
const v3 = [-31063,25190,3,-65537,-2,-268435456,6,4,-60075];
v3[Symbol.toPrimitive] = f2;
const v5 = [-2147483649,-15,-30543,536870887,64];
function f6(a7) {
    Object.defineProperty(v5, "length", { writable: true, enumerable: true, value: v3 });
    return v3;
}
try { f6(v3); } catch (e) {}
