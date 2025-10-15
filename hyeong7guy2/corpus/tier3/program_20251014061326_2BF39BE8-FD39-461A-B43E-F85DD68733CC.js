const v0 = class {
}
function f1(a2, a3) {
    const t3 = Intl.DateTimeFormat;
    t3("fr_CF");
    return v0;
}
v0.toString = f1;
try { v0.toString(v0, f1, v0, f1, v0); } catch (e) {}
