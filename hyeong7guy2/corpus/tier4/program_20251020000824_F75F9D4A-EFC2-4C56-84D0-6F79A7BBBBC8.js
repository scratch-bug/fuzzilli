const v1 = Temporal.ZonedDateTime;
const v2 = v1.prototype;
try { v2.subtract(v2, v1, v1, Temporal, v1); } catch (e) {}
