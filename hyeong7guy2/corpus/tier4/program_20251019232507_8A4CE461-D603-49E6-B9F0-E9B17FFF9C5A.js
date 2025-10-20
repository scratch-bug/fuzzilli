function f1() {
    return "WOc";
}
WeakSet.toString = f1;
class C3 extends WeakSet {
}
try { JSON.rawJSON(C3); } catch (e) {}
