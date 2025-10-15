const v0 = class {
}
function f1() {
}
function f2() {
    function f3() {
        return { done: true };
    }
    return { next: f3 };
}
const v8 = Symbol.iterator;
f1.bind(null, { [v8]: f2 }).toString().matchAll(v0);
