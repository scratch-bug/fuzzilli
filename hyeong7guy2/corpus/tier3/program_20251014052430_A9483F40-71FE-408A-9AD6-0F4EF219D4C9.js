function f3(a4) {
    const t1 = Temporal.PlainDateTime;
    new t1(-44407, -4, -44407);
    return -44407;
}
Temporal.valueOf = f3;
try { Temporal.valueOf(); } catch (e) {}
