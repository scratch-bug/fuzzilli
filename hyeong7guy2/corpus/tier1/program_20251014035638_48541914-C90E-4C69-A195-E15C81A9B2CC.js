function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
gc();
const v41 = [0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0];
v41.parameters = v4;
const v42 = new Uint8Array(v41);
const v44 = WebAssembly.Tag;
try { new v44(v41); } catch (e) {}
const v46 = WebAssembly.Module;
try { v46(); } catch (e) {}
const v48 = new v46(v42);
function f49() {
}
const v50 = { f: f49 };
const v51 = { m: v50 };
const t17 = WebAssembly.Instance;
const v53 = new t17(v48, v51);
const t19 = v53.exports.main;
t19();
