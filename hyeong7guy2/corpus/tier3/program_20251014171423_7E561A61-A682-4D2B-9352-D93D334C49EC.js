let v9 = 13;
v9++;
const v18 = new Uint8Array([0,97,115,109,1,0,0,0,v9,5,1,0,64,127,7]);
const v20 = WebAssembly.Module;
try { new v20(v18); } catch (e) {}
