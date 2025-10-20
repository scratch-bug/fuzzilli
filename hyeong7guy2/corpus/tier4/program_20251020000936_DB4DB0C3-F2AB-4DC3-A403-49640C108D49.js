function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.equals(this);
}
function f3() {
    const v5 = Temporal.ZonedDateTime;
    Reflect.construct(F0, v5, v5);
    return v5;
}
try { f3.call(); } catch (e) {}
