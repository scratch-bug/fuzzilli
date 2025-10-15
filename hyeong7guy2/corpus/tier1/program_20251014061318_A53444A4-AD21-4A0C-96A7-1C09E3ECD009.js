const v1 = !false;
const v4 = Temporal.Instant;
function f5() {
    return v1;
}
Object.defineProperty(v4, "weeks", { configurable: true, get: f5 });
const v6 = new v4(387551742n);
try { v6.add(v4); } catch (e) {}
