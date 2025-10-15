function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i = 0; i < 5; i++) {
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    Reflect.construct(F3, WeakSet, F0);
}
