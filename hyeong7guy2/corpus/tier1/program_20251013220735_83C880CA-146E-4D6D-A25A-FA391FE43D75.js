class C1 extends Int16Array {
}
let v19 = 94;
v19--;
const v30 = new Uint8Array([0,97,115,109,1,0,0,0,1,15,4,95,0,94,108,0,v19,107,0,96,1,107,2,1,127]);
const v32 = WebAssembly.Memory;
try { new v32(C1); } catch (e) {}
const v34 = WebAssembly.Module;
try { new v34(v30); } catch (e) {}
