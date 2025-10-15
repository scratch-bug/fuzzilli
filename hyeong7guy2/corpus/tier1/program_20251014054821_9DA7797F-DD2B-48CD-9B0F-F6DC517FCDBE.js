function f1() {
}
function f2() {
    function f3() {
        return { done: true };
    }
    for (let v8 = 0; v8 < 5; v8++) {
        v8 ^ "NFKC";
    }
    return { next: f3 };
}
const v12 = Symbol.iterator;
f1.bind(null, ...{ [v12]: f2 });
