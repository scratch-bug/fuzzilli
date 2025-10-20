class C1 {
    #h = 1073741824;
    static #m() {
    }
}
new C1();
const v4 = new C1();
const v5 = new C1();
const v6 = v5?.p;
try { new v6(); } catch (e) {}
const v8 = v5?.constructor;
try { new v8(); } catch (e) {}
function f10() {
}
-6 >>> -6;
1.0 - 1.0;
const v17 = new BigInt64Array(1000);
try { v17.entries(); } catch (e) {}
const e = v4;
const v22 = {};
function f24(a25, a26, a27) {
    for (const v28 in a27) {
        function f29(a30, a31) {
            return arguments;
        }
        f29(a25, C1, f29);
    }
    function F34(a36, a37) {
        if (!new.target) { throw 'must be called with new'; }
        function f38() {
            new Uint32Array(1073741824);
            return a36;
        }
        Object.defineProperty(this, "toString", { get: f38 });
    }
    const v41 = new F34(1073741824, 1073741824);
    for (let i43 = 0; i43 < 25000; ++i43) {
    }
    class C49 {
        static [v41](a51, a52, a53) {
        }
    }
}
const v57 = new Worker(f24, { type: "function" });
v57.getMessage(Worker);
