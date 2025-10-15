let v0 = 1000;
const v2 = new Uint8Array(Uint8Array);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            let v10 = "2147483647";
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
            }
            [F11,v0,a5,v10] = v2;
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v17 = new F3();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
