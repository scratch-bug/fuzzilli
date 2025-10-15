const v101 = new Uint8Array([0,97,115,109,1,0,0,0,1,10,2,96,1,124,1,124,96,1,124,1,124,3,3,2,0,1,7,5,1,1,102,0,1,10,77,1,11,1,15,13,124,1,111,1,126,65,3,33,15,208,107,32,0,4,64,111,124,2,64,32,15,65,1,107,33,15,4,64,124,32,15,69,3,32,17,11,5,16,0,32,17,26,32,16,32,17,68,0,0,0,0,0,0,240,63,160,12,0,11]);
const wasmCode = v101;
const v104 = WebAssembly.Module;
let v105;
try { v105 = new v104(wasmCode); } catch (e) {}
const wasmModule = v105;
const v107 = WebAssembly.Instance;
const v108 = {};
let v109;
try { v109 = new v107(wasmModule, v108); } catch (e) {}
const wasmInstance = v109;
const f = wasmInstance?.exports?.f;
for (let i115 = 0; i115 < 100; i115++) {
}
try { f(1.2345e+300); } catch (e) {}
