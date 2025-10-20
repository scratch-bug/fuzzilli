function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            class C8 extends Int8Array {
            }
            const v9 = new C8();
            async function f10(a11, a12) {
                let v13 = 0;
                while (v13 < 3) {
                    let v16 = v13++;
                    v16--;
                    v9[v16];
                }
                await f10;
                return F0;
            }
            f10(f5, f5);
            %OptimizeFunctionOnNextCall(f10);
        }
        f5();
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0(F0, F0);
class C23 {
    static [v22](a25, a26, a27) {
    }
}
