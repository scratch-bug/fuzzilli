const v1 = Temporal.PlainTime;
const v4 = v1.from({ microsecond: 568 });
try {
    v4.round({ roundingIncrement: 568, roundingMode: "halfEven", smallestUnit: "microseconds" });
} catch(e9) {
}
