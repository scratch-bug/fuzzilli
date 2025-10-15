for (let v0 = 0; v0 < 5; v0++) {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new WeakRef(F1);
}
