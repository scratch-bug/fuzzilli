class C0 {
}
const v1 = class extends C0 {
}
const v2 = [C0];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        const v8 = {};
        function f9(a10) {
            const v11 = a10 >>> a10;
            const v12 = v2.constructor;
            const v13 = v12(f7, v12, v8, v11);
            function F14() {
                if (!new.target) { throw 'must be called with new'; }
            }
            try { new v1(F14, ...F14); } catch (e) {}
            v13[1];
        }
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v18 = new F3();
class C19 {
    static [v18](a21, a22, a23) {
    }
    static [v18](a25, a26, a27) {
    }
}
