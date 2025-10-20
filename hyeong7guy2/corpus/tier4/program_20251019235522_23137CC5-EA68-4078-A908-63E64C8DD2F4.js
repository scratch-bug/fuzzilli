function f0(a1, a2) {
    const v4 = Temporal.ZonedDateTime;
    const v7 = { second: 63, timeZone: "Europe/Ulyanovsk" };
    v4.from(v7, { overflow: "reject" });
    return f0;
}
try { f0(); } catch (e) {}
