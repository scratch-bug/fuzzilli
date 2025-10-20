const v2 = !false;
const v5 = Temporal.Instant;
v5.hours = -4096;
function f6() {
    return v2;
}
Object.defineProperty(v5, "weeks", { configurable: true, get: f6 });
const v7 = new v5(387551742n);
try { v7.add(v5); } catch (e) {}
