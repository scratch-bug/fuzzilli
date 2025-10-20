function f1() {
    return WebAssembly;
}
WebAssembly.instantiate().catch(f1);
const t3 = Temporal.Instant;
const v7 = new t3(387551742n);
try { v7.since(v7, 387551742n); } catch (e) {}
