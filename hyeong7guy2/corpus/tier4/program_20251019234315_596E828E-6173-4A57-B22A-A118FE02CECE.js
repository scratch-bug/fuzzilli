function f1() {
    ([-2.220446049250313e-16,,])["setUTCMonth"]();
    return "setUTCMonth";
}
try { f1(); } catch (e) {}
