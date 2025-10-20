const v1 = -Infinity;
function f3(a4, a5, a6) {
    BigInt.asUintN(a6);
    return v1;
}
try { f3(Int16Array, 1.7547835534726805e+308, v1); } catch (e) {}
