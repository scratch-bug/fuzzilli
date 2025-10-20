function f1(a2, a3) {
    return "43184";
}
Date[Symbol.toPrimitive] = f1;
function f7() {
    function f8() {
        Error(Date).stack;
        return { done: true };
    }
    return { construct: f8, next: f8 };
}
const v15 = Symbol.iterator;
Date.bind(null, ...{ [v15]: f7 });
