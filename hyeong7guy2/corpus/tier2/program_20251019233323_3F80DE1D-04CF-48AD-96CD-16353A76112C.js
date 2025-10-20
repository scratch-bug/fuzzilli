const v0 = class {
}
const v35 = [0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0];
let v36;
try { v36 = new Uint8Array(v35); } catch (e) {}
const v38 = WebAssembly?.Module;
let v39;
try { v39 = new v38(v36); } catch (e) {}
function f40() {
}
const v41 = { f: f40 };
const v42 = { m: v41 };
const v43 = WebAssembly?.Instance;
let v44;
try { v44 = new v43(v39, v42); } catch (e) {}
const v46 = v44?.exports?.main;
for (let i48 = 0;
    (() => {
        const v50 = {};
        try { v50.defineProperty = Symbol; } catch (e) {}
        return i48 < 20000;
    })();
    i48++) {
    try { new Int32Array(); } catch (e) {}
    for (let v60 = 0; v60 < 10; v60++) {
        v60 < 0;
    }
    try { v46(); } catch (e) {}
}
try { new v0(); } catch (e) {}
