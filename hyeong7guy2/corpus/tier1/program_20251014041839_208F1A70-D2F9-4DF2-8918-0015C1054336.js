function f2() {
    function f3() {
        Error(Date).stack;
        return { done: true };
    }
    return { construct: f3, next: f3 };
}
const v10 = Symbol.iterator;
Date.bind(null, ...{ [v10]: f2 });
