const v1 = Intl.ListFormat;
const v3 = new Uint32Array();
v3.valueOf = v1;
try { v3.at(v3); } catch (e) {}
