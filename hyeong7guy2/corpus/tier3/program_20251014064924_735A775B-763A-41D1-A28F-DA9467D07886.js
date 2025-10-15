class C2 {
}
C2[Symbol.toPrimitive] = Symbol;
const t3 = Intl.PluralRules;
const v6 = new t3();
try { v6.selectRange(C2, Set); } catch (e) {}
