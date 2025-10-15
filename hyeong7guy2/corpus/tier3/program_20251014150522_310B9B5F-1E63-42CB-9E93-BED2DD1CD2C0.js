const v1 = Intl.PluralRules;
function f3() {
    return f3;
}
const v4 = new v1();
try { v4.selectRange(1.7976931348623157e+308, f3); } catch (e) {}
