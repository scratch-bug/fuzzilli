Array.milliseconds = Date;
const v3 = Temporal.Duration;
try { v3.compare(Array); } catch (e) {}
