function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = F0.constructor;
    v5(v5, F0, a3, a3);
}
function f7() {
    Reflect.construct(Temporal.Instant, [387551742n], F0);
    return Reflect;
}
F0.constructor = f7;
new F0();
