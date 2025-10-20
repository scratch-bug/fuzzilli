const v0 = class {
}
v0[7] = v0;
new v0();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            const v10 = f8[512];
            const v12 = v10 >>> 7;
            for (let v13 = 0; v13 < 5; v13++) {
                class C14 {
                }
                C14.g = C14;
                const v15 = C14.call;
                const v16 = v15?.bind;
                try { v16(f8, v16, this); } catch (e) {}
                Array(v12, v15);
            }
            return v10;
        }
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v19 = new F3();
v19.toString();
class C21 {
    static [v19](a23, a24, a25) {
    }
}
C21.prototype;
