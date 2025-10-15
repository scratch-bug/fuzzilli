new Int16Array();
class C4 {
    static set b(a6) {
        [];
    }
    static set g(a9) {
    }
}
C4.name;
try { new C4(); } catch (e) {}
const v12 = C4?.constructor;
try { new v12(); } catch (e) {}
function F15(a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    try { a17.constructor(); } catch (e) {}
    try { new a18(); } catch (e) {}
    this.c = a19;
    this.f = -2.212553402179351;
}
new F15();
function f23() {
    const v24 = %WasmStruct();
    const v25 = %WasmArray();
}
try { f23.call(); } catch (e) {}
try { new Worker(); } catch (e) {}
const t26 = "function";
t26[1] = "function";
new Worker(f23, { type: "function" });
for (let i33 = 0;
    (() => {
        const v37 = {
            o(a35, a36) {
            },
        };
        return i33 < 20000;
    })();
    ++i33) {
}
