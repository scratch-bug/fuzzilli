const v0 = [];
function f1(a2) {
    function F3(a5) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v6 = class extends F3 {
        #n(a8, a9, a10) {
        }
    }
    new v6();
    return f1;
}
const v12 = f1(v0);
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    function f17() {
        function f18(a19) {
            const v20 = f18[4];
            v0.forEach(v12);
            v20 | 7;
        }
        f18.call();
        f18();
        %OptimizeMaglevOnNextCall(f18);
        return f18;
    }
    Object.defineProperty(this, "toString", { get: f17 });
}
const v26 = new F13();
class C27 {
    static [v26](a29, a30, a31) {
    }
}
