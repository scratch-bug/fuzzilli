function f2(a3, a4) {
    const t1 = Temporal.ZonedDateTime;
    new t1(22724n, "log");
    return "log";
}
try { f2(22724n, f2); } catch (e) {}
