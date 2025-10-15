Date.roundingMode = BigInt64Array;
const v2 = class extends Date {
}
const v3 = new v2();
const v4 = v3.toTemporalInstant();
try { v4.round(Date); } catch (e) {}
