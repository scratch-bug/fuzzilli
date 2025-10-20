const v2 = Temporal.Duration;
v2.nanoseconds = -9007199254740990;
const v3 = new v2();
v3.add(v2).toLocaleString();
