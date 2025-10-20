function f2() {
    return Symbol;
}
function f3() {
    function f4() {
        const v5 = {};
        v5.a = v5;
        const v6 = {};
        v6.h = v6;
        const t9 = {};
        t9.b = Int8Array;
        Temporal.PlainTime;
        const v10 = {};
        v10.e = v10;
        return { done: true };
    }
    return { next: f4 };
}
const v14 = Symbol.iterator;
f2.bind(null, ...{ [v14]: f3 });
