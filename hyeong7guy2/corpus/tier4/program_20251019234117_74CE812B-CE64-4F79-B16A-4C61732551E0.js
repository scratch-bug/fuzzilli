function f0() {
    const t1 = Temporal.ZonedDateTime;
    const v5 = new t1(15n, "-16:00");
    v5.round();
    return v5;
}
try { f0(); } catch (e) {}
