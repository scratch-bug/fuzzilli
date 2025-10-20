const v1 = {};
Object.defineProperty(v1, "a", { writable: true, configurable: true, enumerable: true, value: 0.38013607130317106 });
for (let i4 = (() => {
        const v2 = {};
        return 0;
    })();
    i4 < 100000;
    i4++) {
    v1.a = i4;
}
class C10 {
}
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
}
class C15 extends F11 {
}
gc();
function f18(a19, a20, a21) {
    return C15;
}
f18(C15);
