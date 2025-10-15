const v1 = new Uint8Array(Uint8Array, Uint8Array, Uint8Array);
const v2 = /c[\cZ]kV(?:a+)?/imsy;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            let v10 = "2147483647";
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v15 = new F11();
            let v16 = v2 !== v15;
            [v16,f7,a5,v10] = v1;
            return a9;
        }
        f8(Uint8Array);
        f8(f8);
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v19 = new F3();
class C20 {
    static [v19](a22, a23, a24) {
    }
}
