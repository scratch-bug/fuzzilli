const v2 = Temporal.PlainMonthDay;
const v7 = {
    calendar: "hebrew",
    day: 19,
    era: "am",
    eraYear: -9.828127370804582,
    month: 1,
};
const v8 = v2.from(v7);
try { v8.toLocaleString("am"); } catch (e) {}
