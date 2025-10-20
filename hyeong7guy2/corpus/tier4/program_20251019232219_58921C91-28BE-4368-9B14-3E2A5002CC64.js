for (let i2 = 0, i3 = 10; i3; i3--) {
}
function f9() {
    const v11 = Temporal.ZonedDateTime;
    const v14 = { microsecond: 1000, timeZone: "-19:00" };
    v11.from(v14, { overflow: "reject" });
    return f9;
}
try { f9(); } catch (e) {}
