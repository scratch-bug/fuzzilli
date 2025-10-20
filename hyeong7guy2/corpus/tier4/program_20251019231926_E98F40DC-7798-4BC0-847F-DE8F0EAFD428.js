function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.toLocaleString();
}
function f3() {
    const v5 = Temporal.ZonedDateTime;
    return Reflect.construct(F0, v5, v5);
}
try { f3(); } catch (e) {}
