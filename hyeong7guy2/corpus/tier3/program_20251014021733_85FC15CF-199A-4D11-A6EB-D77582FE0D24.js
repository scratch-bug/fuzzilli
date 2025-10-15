class C1 extends Uint32Array {
}
const t2 = Intl.RelativeTimeFormat;
const v4 = new t2();
try { v4.format(C1, C1); } catch (e) {}
