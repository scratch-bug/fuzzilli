class C0 {
}
const v3 = Array();
v3[17] = C0;
const v5 = Object.seal(v3);
try { v5.unshift(1000); } catch (e) {}
