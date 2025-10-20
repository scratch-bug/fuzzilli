const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        const v6 = {};
        function f7(a8) {
            const v9 = a8 >>> a8;
            const v10 = v0.constructor;
            const v11 = v10(f5, v10, v6, v9);
            let v12;
            try { v12 = v11.forEach(this); } catch (e) {}
            return v12;
        }
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v13 = new F1();
class C14 {
    static [v13](a16, a17, a18) {
    }
    static [v13](a20, a21, a22) {
    }
}
