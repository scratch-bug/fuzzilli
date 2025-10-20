function f1() {
    return f1;
}
const v3 = [f1,-2.220446049250313e-16];
try {
    v3.toLocaleString("t1Tof");
} catch(e5) {
    e5.stack;
}
