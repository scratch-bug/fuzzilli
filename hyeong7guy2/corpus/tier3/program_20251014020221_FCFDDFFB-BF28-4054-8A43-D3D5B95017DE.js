const v0 = /abc+/is;
const v2 = class extends v0.constructor {
}
try { v2.escape(v2, v0); } catch (e) {}
