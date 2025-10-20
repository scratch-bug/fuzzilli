function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let i9 = 0;
                i9 < 10000;
                (() => {
                    let v14;
                    try { v14 = Array(); } catch (e) {}
                    try { v14.push(f4); } catch (e) {}
                    try { v14.push(Uint8ClampedArray); } catch (e) {}
                    i9++;
                })()) {
            }
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
let v19;
try { v19 = new F0(F0, F0); } catch (e) {}
class C20 {
    static [v19](a22, a23, a24) {
    }
}
class C25 {
}
try { new C25(); } catch (e) {}
