const v1 = Intl.PluralRules;
function f3() {
    return Intl;
}
f3[Symbol.toPrimitive] = v1;
const v6 = new v1(Intl, f3);
try { v6.selectRange(1.7976931348623157e+308, f3); } catch (e) {}
