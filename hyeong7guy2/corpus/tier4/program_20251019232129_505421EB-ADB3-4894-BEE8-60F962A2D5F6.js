function f1() {
    return Temporal.ZonedDateTime.compare(f1);
}
f1.timeZone = 4;
try { f1(); } catch (e) {}
