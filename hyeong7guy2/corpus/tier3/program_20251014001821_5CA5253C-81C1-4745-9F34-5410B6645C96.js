class C0 {
}
const v3 = new Proxy(C0, {});
const v4 = v3.constructor;
try { v4(v3); } catch (e) {}
