function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 64n;
}
const t4 = 0;
delete t4[3];
new F2();
const v13 = class extends F2 {
}
new v13();
const v17 = new Uint32Array(Uint32Array);
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    function f22() {
        function f23(a24) {
            function f25(a26) {
                v17[2] &= 9007199254740992;
            }
            f25.call();
            f22.constructor = f25;
            f22.constructor.call();
        }
        f23();
        f23();
        %OptimizeMaglevOnNextCall(f23);
        return f23;
    }
    Object.defineProperty(this, "toString", { get: f22 });
}
const v32 = new F18();
class C33 {
    static [v32](a35, a36, a37) {
    }
}
