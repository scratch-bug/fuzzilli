function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = a7.constructor;
    t2(a6);
}
try { new F3("NFC", "0Oc", WeakSet); } catch (e) {}
