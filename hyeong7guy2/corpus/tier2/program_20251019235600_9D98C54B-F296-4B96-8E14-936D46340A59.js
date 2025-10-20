function f1() {
    return f1;
}
function f2() {
    function f3() {
        const v6 = { done: true };
        const t5 = Intl.PluralRules;
        const v9 = new t5(f3, f1);
        v9.select(-1.7976931348623157e+308);
        return v6;
    }
    return { next: f3 };
}
const v12 = Symbol.iterator;
f1.bind(null, ...{ [v12]: f2 });
