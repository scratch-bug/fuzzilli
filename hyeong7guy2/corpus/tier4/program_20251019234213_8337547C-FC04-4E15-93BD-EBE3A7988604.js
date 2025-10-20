const v0 = class {
}
class C1 extends v0 {
}
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F2(C1, F2, C1, F2);
const v9 = new F2(C1, v0, v0, v0);
class C10 {
}
for (let i13 = 13;
    (() => {
        function f15(a16, a17, a18, a19) {
            const v20 = {};
            return a17;
        }
        const v21 = f15(v8, v8, C10, v9);
        f15(F2, v21, v21, C1);
        return i13 < 25000;
    })();
    ++i13) {
    ([i13]).push(-0.0);
}
