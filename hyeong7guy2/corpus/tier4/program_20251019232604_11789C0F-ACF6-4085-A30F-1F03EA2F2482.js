function f0() {
    return f0;
}
class C1 extends f0 {
}
try {
    const v3 = Intl.NumberFormat;
    const v5 = {};
    v5.numberingSystem = C1;
    v3("yue", v5);
} catch(e7) {
}
