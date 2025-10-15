function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a4 * a4;
}
new F1();
gc();
/\p{gc=Nd}(xyz{0,1}iixyz{93})/vgs;
const v44 = [0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0];
const v45 = new Uint8Array(v44);
const v47 = WebAssembly.Tag;
try { new v47(v44); } catch (e) {}
const v49 = WebAssembly.Module;
try { v49(); } catch (e) {}
const v51 = new v49(v45);
function f52() {
}
const v53 = { f: f52 };
const v54 = { m: v53 };
const t18 = WebAssembly.Instance;
const v56 = new t18(v51, v54);
const t20 = v56.exports.main;
t20();
