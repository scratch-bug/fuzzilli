const v2 = Temporal.Duration;
Object.defineProperty(v2, "microseconds", { writable: true, value: 257 });
const v3 = new v2();
v3.add(v2).toLocaleString().toLowerCase();
