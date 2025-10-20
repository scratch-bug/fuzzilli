const v0 = class {
}
const v1 = [2.4108082532991067e+307];
const v2 = {};
v2.isExtensible = v0;
const v4 = new Proxy(v1, v2);
try { Object.isSealed(v4); } catch (e) {}
