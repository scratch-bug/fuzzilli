function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a4;
    this.e = "35865";
    this.a = "35865";
    this.g = a4;
}
const v5 = new F2(F2);
const v6 = new F2(v5);
new F2(v6);
new Int8Array(8);
new Uint8ClampedArray();
new Uint8Array();
function F18(a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a21;
    this.g = a21;
}
new F18(16, 16);
function F24(a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    function f28() {
        function f29(a30) {
            new BigUint64Array(1073741825);
            const v69 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
            const t25 = WebAssembly.Module;
            const v72 = new t25(v69);
            function f73() {
                return 0;
            }
            const v74 = { f: f73 };
            const v75 = { m: v74 };
            const t32 = WebAssembly.Instance;
            const v77 = new t32(v72, v75);
            const v105 = new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,110,1,110,2,7,1,1,109,1,102,0,0]);
            const t35 = WebAssembly.Module;
            new t35(v105);
            const t37 = v77.exports.main;
            t37();
        }
        f29();
        f29();
        return f29;
    }
    Object.defineProperty(this, "toString", { get: f28 });
}
const v114 = new F24(F24, F24);
v114.toString(F24, v114, F24, v114);
