const v0 = class {
}
for (let i2 = 0, i3 = v0; i3; i3--) {
}
for (let i11 = 0, i12 = 10; i12;) {
    i12--;
}
const v18 = [v0,v0,v0,v0];
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    eval();
    function f25() {
        function f26(a27) {
            const v28 = v18.constructor;
            const v29 = v28(f25, v28);
            try { v29.forEach(v0); } catch (e) {}
        }
        f26(f26);
        f26();
        %OptimizeMaglevOnNextCall(f26);
        return f26;
    }
    Object.defineProperty(this, "toString", { get: f25 });
}
const v33 = new F19();
class C34 {
    static [v33](a36, a37, a38) {
    }
}
