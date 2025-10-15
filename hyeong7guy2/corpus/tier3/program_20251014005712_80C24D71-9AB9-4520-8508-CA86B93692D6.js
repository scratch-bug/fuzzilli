const v0 = /y+/mugs;
function f1() {
    return v0;
}
const v2 = class extends f1 {
}
const v3 = new v2();
const v4 = new v2();
try { v4.compile(v3, v3); } catch (e) {}
