function f2() {
    return Symbol;
}
function f3() {
    const v6 = -9007199254740990n * -4294967297n;
    (v6 ** 13n) % v6;
    function f9() {
        const v10 = {};
        v10.done = v10;
        return v10;
    }
    return { next: f9 };
}
const v12 = Symbol.iterator;
f2.bind(null, ...{ [v12]: f3 });
