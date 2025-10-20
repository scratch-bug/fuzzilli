function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -256;
}
const v3 = new F1();
const v4 = new F1();
const v7 = new Int16Array(512);
class C8 {
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13(a14, a15, a16) {
        function F18(a20, a21, a22, a23) {
            if (!new.target) { throw 'must be called with new'; }
            function f24() {
                return f24;
            }
            function f25(a26) {
                for (let i = 0; i < 5; i++) {
                    v3.e;
                    for (let i30 = 0; i30 < 1; i30++) {
                        [i30,a16,i30] = v7;
                    }
                }
                for (let v36 = 0; v36 < 5; v36++) {
                    const v38 = {
                        get g() {
                            return Temporal;
                        },
                    };
                    v4.valueOf = Temporal;
                }
                return C8;
            }
            Object.defineProperty(this, "e", { get: f24, set: f25 });
            this.e = -1;
        }
        new F18(Int16Array, F9, -256, 512);
        return C8;
    }
    f13();
    %OptimizeFunctionOnNextCall(f13);
}
new F9();
new F9(v4, 512);
new F9();
