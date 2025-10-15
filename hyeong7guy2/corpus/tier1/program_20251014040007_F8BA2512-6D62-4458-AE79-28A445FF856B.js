function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1();
v5.length = 1343066493n;
gc();
const v42 = [0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0];
v42.parameters = v5;
const v43 = new Uint8Array(v42);
const v45 = WebAssembly.Tag;
try { new v45(v42); } catch (e) {}
const v47 = WebAssembly.Module;
try { v47(); } catch (e) {}
const v49 = new v47(v43);
function f50() {
}
const v51 = { f: f50 };
const v52 = { m: v51 };
const t18 = WebAssembly.Instance;
const v54 = new t18(v49, v52);
const t20 = v54.exports.main;
t20();
