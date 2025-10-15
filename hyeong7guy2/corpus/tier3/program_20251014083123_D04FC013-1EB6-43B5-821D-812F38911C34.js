Int32Array.weeks = Symbol;
const v3 = class extends Date {
}
const v4 = new v3();
const v5 = v4.toTemporalInstant();
try { v5.add(Int32Array); } catch (e) {}
