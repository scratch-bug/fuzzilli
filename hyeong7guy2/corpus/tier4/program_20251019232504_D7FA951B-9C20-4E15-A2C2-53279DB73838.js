const v1 = class extends Date {
}
const v2 = new v1();
const v3 = v2.toTemporalInstant();
try { v3.toZonedDateTimeISO(); } catch (e) {}
