const v2 = Temporal.PlainDateTime;
const v7 = {
    calendar: "ethioaa",
    day: 3,
    era: "mundi",
    eraYear: 26,
    month: 8,
};
const v8 = v2.from(v7);
try { v8.toLocaleString(); } catch (e) {}
