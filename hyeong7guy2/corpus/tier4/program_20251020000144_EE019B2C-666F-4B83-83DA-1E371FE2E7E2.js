function f0() {
    return f0;
}
const v1 = class extends f0 {
}
const v3 = /D(a\1)X4a(?:b)/usgmi.toString;
try { v3.call(v1); } catch (e) {}
