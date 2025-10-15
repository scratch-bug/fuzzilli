function f1() {
    return f1;
}
try { f1.__defineGetter__(108, 108); } catch (e) {}
