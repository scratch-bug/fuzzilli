const v2 = Temporal.Instant;
function f3() {
    return f3();
}
Object.defineProperty(v2, "weeks", { configurable: true, get: f3 });
const v5 = new v2(387551742n);
try { v5.add(v2); } catch (e) {}
