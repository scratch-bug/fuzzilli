const v0 = [-2089195540,16,129];
function f1() {
    return v0;
}
class C2 extends f1 {
    #p(a4, a5) {
    }
}
const v6 = new C2();
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11() {
        function f12(a13) {
            const v14 = v6.values();
            v14.toArray();
            v14.next();
            return a9;
        }
        %OptimizeMaglevOnNextCall(f12);
        return f12;
    }
    Object.defineProperty(this, "toString", { get: f11 });
}
const v17 = new F7();
class C18 {
    static [v17](a20, a21, a22) {
    }
    static [v17](a24, a25, a26) {
    }
    static [v17](a28, a29, a30) {
    }
}
