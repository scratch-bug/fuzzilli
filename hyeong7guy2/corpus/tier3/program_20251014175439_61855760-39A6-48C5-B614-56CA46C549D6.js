function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = {};
gc();
const v10 = new FinalizationRegistry(Object);
try { v10.register(); } catch (e) {}
