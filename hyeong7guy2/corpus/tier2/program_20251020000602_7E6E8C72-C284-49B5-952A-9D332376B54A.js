function f2() {
    return Symbol;
}
function f3() {
    (-9007199254740990n * -4294967297n) | 13n;
    function f8() {
        return { done: true };
    }
    return { next: f8 };
}
const v12 = Symbol.iterator;
f2.bind(null, ...{ [v12]: f3 });
