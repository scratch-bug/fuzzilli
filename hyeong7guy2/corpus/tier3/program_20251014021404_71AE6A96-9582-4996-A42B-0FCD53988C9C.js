function f0(a1) {
    new SharedArrayBuffer(-65535);
    return -65535;
}
try { f0(f0); } catch (e) {}
