const v1 = class extends Date {
}
const v2 = new v1();
const v3 = v2.toTemporalInstant();
v3.equals(v3);
