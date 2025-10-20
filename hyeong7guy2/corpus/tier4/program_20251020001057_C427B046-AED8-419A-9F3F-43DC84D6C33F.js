class C0 {
}
const v1 = class extends C0 {
}
async function f2(a3, a4) {
    try { a4(); } catch (e) {}
    function F6(a8) {
        if (!new.target) { throw 'must be called with new'; }
        class C9 {
        }
        C9.d = C9;
    }
    new F6();
    for (let i12 = v1, i13 = 10;
        i13;
        (() => {
            const v16 = i13--;
            v16 * v16;
        })()) {
    }
    await f2;
    return f2;
}
f2(f2, f2);
%OptimizeFunctionOnNextCall(f2);
