function f0() {
    return f0;
}
const t3 = Temporal.Duration;
const v3 = new t3();
try { v3.total(f0); } catch (e) {}
