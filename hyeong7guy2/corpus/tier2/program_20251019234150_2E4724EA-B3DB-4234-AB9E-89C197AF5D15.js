function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = 0;
            do {
                let v8 = 0;
                do {
                    function f10(a11, a12, a13, a14) {
                        return a12;
                    }
                    let v16 = new Promise(f10);
                    ({"callee":v8,"e":v16,"length":v16,...v8} = arguments);
                    Uint8Array.of(208, 45, 200, 184, 54, 125, 3, 239, 75, 180, 78, 54, 170, 94, 64, 138, 58, 162, 236, 248, 214, 181, 186, 228, 53, 183, 243, 91, 29, 227, 81, 67, 157, 46, 107, 93, 207, 152, 42, 76, 112, 220, 153, 205, 1, 209, 233, 160, 36, 178, 251, 65, 231, 189, 202, 31, 212, 175, 159, 15, 78, 155).toBase64(this, 65, 54, F0, 202);
                } while (v8 < 0)
                v7++;
            } while (v7 < 7)
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v87 = new F0();
class C88 {
    static [v87](a90, a91, a92) {
    }
    static [v87](a94, a95, a96) {
    }
}
