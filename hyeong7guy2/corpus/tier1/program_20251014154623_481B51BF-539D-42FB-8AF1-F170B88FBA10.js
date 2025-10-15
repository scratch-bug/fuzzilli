function f1(a2, a3, a4, a5) {
    Array.prototype.indexOf.apply(a3, []);
}
const v13 = class {
}
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    function f18() {
        function f19(a20) {
            function F23(a25, a26) {
                if (!new.target) { throw 'must be called with new'; }
                const v27 = this.constructor;
                try { new v27(v13, 11037); } catch (e) {}
            }
            try { f1(); } catch (e) {}
        }
        f19();
        f19();
        %OptimizeMaglevOnNextCall(f19);
        return f19;
    }
    Object.defineProperty(this, "toString", { get: f18 });
}
const v32 = new F14();
class C33 {
    static [v32](a35, a36, a37) {
    }
}
