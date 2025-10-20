function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a4(); } catch (e) {}
    function f6(a7) {
        return `1073741824${"+23:00"}9007199254740990${`string${536870912n}undefined`}d`;
    }
    %OptimizeMaglevOnNextCall(f6);
    f6();
}
new F1(F1, F1);
