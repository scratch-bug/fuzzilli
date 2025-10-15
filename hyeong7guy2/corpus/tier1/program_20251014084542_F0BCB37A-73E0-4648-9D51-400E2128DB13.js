const v1 = new Int8Array();
function f2() {
    return v1;
}
class C3 extends f2 {
}
const v4 = new C3();
function f6() {
    return C3;
}
function f7() {
    function f8() {
        Error.isError(v4);
        return { done: true };
    }
    return { next: f8 };
}
const v14 = Symbol.iterator;
f6.bind(null, ...{ [v14]: f7 });
