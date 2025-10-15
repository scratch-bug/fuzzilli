new BigUint64Array(1024);
const v5 = new Map();
const v7 = /(?<=a)/mvsd;
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v7;
    this.f = a10;
}
let v12 = 1;
v12--;
try { Uint8Array.fromHex(Uint8Array); } catch (e) {}
const v16 = new Uint8Array(v12);
try { v16.setFromBase64(v5); } catch (e) {}
function f18() {
    return 129;
}
const v20 = Symbol.iterator;
const v69 = {
    [v20]() {
        let v22 = 10;
        const v68 = {
            next() {
                v22--;
                const v54 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,1328680641,7,1,1,129,1,102,0,0,7,5,1,1,101,0,0]);
                const t2 = WebAssembly.Module;
                const v57 = new t2(v54);
                function f58() {
                    return WebAssembly;
                }
                const v59 = { f: f58 };
                const v60 = { m: v59 };
                const t9 = WebAssembly.Instance;
                const v62 = new t9(v57, v60);
                v62.exports.e;
                const v66 = v22 == 0;
                return { done: v66, value: v22 };
            },
        };
        return v68;
    },
};
("validate").length;
function f72(a73) {
    a73 ?? a73;
    gc({ execution: "async", type: "major" });
    return a73;
}
class C80 extends f72 {
}
function F81(a83, a84, a85) {
    if (!new.target) { throw 'must be called with new'; }
    a83.length = a83;
    a84.prototype = a84;
    try { a85.fromEntries(f72); } catch (e) {}
    with (this) {
        new C80();
    }
}
const v88 = new F81(F81, f72, f72);
const v89 = v88?.constructor;
try { new v89(v88, v12, v88); } catch (e) {}
