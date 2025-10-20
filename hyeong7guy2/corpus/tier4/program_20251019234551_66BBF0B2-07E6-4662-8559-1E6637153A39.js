function f0() {
    return f0;
}
Array.microseconds = f0;
const v3 = Temporal.Duration;
try { v3.compare(Array); } catch (e) {}
