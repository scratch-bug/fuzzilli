const v2 = Temporal.PlainDateTime;
Object.defineProperty(v2, "minute", { writable: true, configurable: true, value: 4 });
const v3 = new v2(4, 4, 4);
v3.with(v2);
