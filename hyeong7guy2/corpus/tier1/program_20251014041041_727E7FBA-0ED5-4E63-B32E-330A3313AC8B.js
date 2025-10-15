let v0 = 4096;
const v1 = class {
}
function f2() {
    return v1;
}
function f3() {
    function f4() {
        eval(v0++);
        return { done: v1 };
    }
    f4();
    return { next: f4 };
}
const v12 = Symbol.iterator;
f2.bind(null, ...{ [v12]: f3 });
