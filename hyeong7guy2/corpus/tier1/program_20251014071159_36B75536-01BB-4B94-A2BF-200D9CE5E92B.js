class C0 {
}
function f1() {
    return C0;
}
Float64Array.toString = f1;
const v4 = Intl.PluralRules;
try {
    new v4("so", { minimumIntegerDigits: Float64Array });
} catch(e8) {
}
