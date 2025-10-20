const v1 = class {
}
class C2 extends v1 {
}
const v4 = C2.name.constructor;
try { v4.fromCodePoint(-9223372036854775808); } catch (e) {}
