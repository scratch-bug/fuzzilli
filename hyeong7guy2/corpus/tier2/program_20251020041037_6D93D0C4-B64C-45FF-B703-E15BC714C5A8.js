function f1() {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
new F3();
const v10 = class {
}
Symbol.iterator;
const v14 = {};
/a(?:b)?/usygm;
[];
new Uint8ClampedArray();
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    function f25() {
        function f26(a27) {
            new BigUint64Array(1073741825);
            function f39() {
            }
            [f39];
            new SharedArrayBuffer(9, { maxByteLength: 512 });
            new BigInt64Array();
            for (let v69 = 0; v69 < 5; v69++) {
            }
            const v77 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
            const t26 = WebAssembly.Module;
            const v80 = new t26(v77);
            function f81() {
            }
            const v82 = { f: f81 };
            const v83 = { m: v82 };
            const t32 = WebAssembly.Instance;
            const v93 = new t32(v80, v83);
            const t34 = v93.exports.main;
            t34();
        }
        return f26;
    }
    Object.defineProperty(this, "toString", { get: f25 });
}
const v97 = new F21(F21, F21);
v97.toString();
Symbol.iterator;
