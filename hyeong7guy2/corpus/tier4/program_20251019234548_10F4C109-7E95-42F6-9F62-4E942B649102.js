class C0 {
}
function f1() {
    return C0;
}
BigInt64Array.toString = f1;
Date.roundingMode = BigInt64Array;
const v4 = class extends Date {
}
const v5 = new v4();
const v6 = v5.toTemporalInstant();
try { v6.round(Date); } catch (e) {}
