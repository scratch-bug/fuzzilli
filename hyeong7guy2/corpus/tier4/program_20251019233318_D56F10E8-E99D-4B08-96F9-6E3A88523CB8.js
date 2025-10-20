const v2 = Temporal.PlainTime;
const v4 = v2.from({ microsecond: 2 });
v4.round({ smallestUnit: "microseconds" });
