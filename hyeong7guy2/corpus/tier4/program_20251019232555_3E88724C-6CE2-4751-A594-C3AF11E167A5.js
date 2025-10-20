function f1() {
    return f1;
}
const v2 = f1.constructor;
try { v2("val'eOf"); } catch (e) {}
