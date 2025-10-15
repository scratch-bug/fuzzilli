const v1 = Temporal.Duration;
v1[Symbol.iterator] = v1;
try { Int16Array.from(v1); } catch (e) {}
