class C0 {
}
function f2() {
    return f2;
}
function f3() {
    const v5 = new Date();
    v5.valueOf = Symbol;
    try { v5.setUTCHours(C0, C0, C0, v5); } catch (e) {}
    function f7() {
        return { done: true };
    }
    return { next: f7 };
}
const v11 = Symbol.iterator;
f2.bind(null, ...{ [v11]: f3 });
