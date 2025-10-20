new Uint8ClampedArray();
new Uint8Array();
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a10;
}
new F7(16, 16);
new F7(128, 16, 128);
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    function f18() {
        function f19(a20) {
            new BigUint64Array(1073741825);
            const v59 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
            const t14 = WebAssembly.Module;
            const v62 = new t14(v59);
            function f63() {
                return 0;
            }
            const v64 = { f: f63 };
            const v65 = { m: v64 };
            const t21 = WebAssembly.Instance;
            const v67 = new t21(v62, v65);
            let v82 = 110;
            v82--;
            const v96 = new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,v82,1,110,2,7,1,1,109,1,102,0,0]);
            const t26 = WebAssembly.Module;
            new t26(v96);
            const t28 = v67.exports.main;
            t28();
        }
        f19();
        f19();
        return f19;
    }
    Object.defineProperty(this, "toString", { get: f18 });
}
const v105 = new F14(F14, F14);
v105.toString(F14, v105, F14, v105);
