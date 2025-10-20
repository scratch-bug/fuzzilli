const v1 = 2147483649 * 2147483649;
const v3 = Temporal.Instant;
try { v3.fromEpochMilliseconds(v1); } catch (e) {}
