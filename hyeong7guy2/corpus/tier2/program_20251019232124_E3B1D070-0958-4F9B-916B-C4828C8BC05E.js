function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0(F0);
class C4 {
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10, a11, a12) {
        function F14(a16, a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            function f20() {
                return this;
            }
            function f21(a22) {
                const v25 = ([-59161,-38111,-8,41058,-10044,-1255646682,256]).slice();
                function f26(a27, a28, a29) {
                    const v30 = { [Math]: a22 };
                    return a8;
                }
                f26(Math, v25, a17);
                const v32 = f26(v3, f26, f9);
                f26();
                const v34 = f26();
                const v35 = f26(v34, v34, a7);
                f26();
                f26(v35, -1, f26());
                f26(a11, v34, v3);
                -2.2378445685972092e+307 >>> C4;
                let v42 = 0;
                do {
                    function F43(a45, a46, a47) {
                        if (!new.target) { throw 'must be called with new'; }
                        this.c = Math;
                    }
                    const v48 = new F43(a10, v42, a12);
                    new F43(v48, v48, a8);
                    new F43(v42, v25, v32);
                    new F43();
                    v42++;
                } while (v42 < 5)
                const v56 = class extends Uint32Array {
                }
                new v56();
                return a7;
            }
            Object.defineProperty(this, "e", { get: f20, set: f21 });
            this.e = -1;
            v3 >= this;
        }
        new F14();
        const v63 = {
            [v3](a61, a62) {
            },
        };
        return F14;
    }
    f9(v3, v3, C4);
    %OptimizeFunctionOnNextCall(f9);
}
new F5();
const v66 = new F5(F5, F5);
new F5(v66, C4);
