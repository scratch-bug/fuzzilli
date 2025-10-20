let v12 = 0;
v12++;
v12--;
const v27 = [0,97,115,109,1,0,0,0,9,15,4,1,v12,94,108,0,94,107,0,96,1,107,2,1,127];
v27[13] = v27;
const v28 = new Uint8Array(v27);
const v30 = WebAssembly.Module;
try { new v30(v28); } catch (e) {}
