const v1 = Temporal.PlainDate;
Object.defineProperty(v1, "toString", { configurable: true, enumerable: true, value: v1 });
try { new v1(v1); } catch (e) {}
