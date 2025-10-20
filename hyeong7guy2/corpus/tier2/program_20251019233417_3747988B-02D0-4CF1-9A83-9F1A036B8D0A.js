function f2() {
}
function f3() {
    function f4() {
        return { done: true };
    }
    f4.g = f4;
    return { next: f4 };
}
f3();
const v9 = Symbol.iterator;
const v10 = { [v9]: f3 };
try { f2.bind(null, ...v10); } catch (e) {}
new Uint32Array(268435440);
