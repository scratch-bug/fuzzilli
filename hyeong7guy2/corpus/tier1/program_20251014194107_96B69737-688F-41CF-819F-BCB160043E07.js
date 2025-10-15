const v1 = class {
}
function f2() {
    function f3(a4, a5) {
        return -61503;
    }
    return f3;
}
Object.defineProperty(v1, "valueOf", { configurable: true, enumerable: true, get: f2 });
const t9 = Intl.PluralRules;
const v8 = new t9(Intl, -61503);
v8.select(v1);
