const v1 = Temporal.Duration;
const v2 = v1.prototype;
try { v2.negated(v1, Temporal, v2); } catch (e) {}
