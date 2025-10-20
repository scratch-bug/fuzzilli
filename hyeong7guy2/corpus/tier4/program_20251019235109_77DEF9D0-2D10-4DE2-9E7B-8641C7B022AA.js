function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
Reflect.construct(FinalizationRegistry, [Symbol], F1);
