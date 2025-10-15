function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
F1.flavor = "boolean";
gc(F1);
