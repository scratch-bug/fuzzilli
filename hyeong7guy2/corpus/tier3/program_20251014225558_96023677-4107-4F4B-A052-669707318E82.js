class C1 {
}
C1[Symbol.toPrimitive] = Symbol;
const v4 = Intl.Segmenter;
const v5 = new v4(v4);
try { v5.segment(C1); } catch (e) {}
