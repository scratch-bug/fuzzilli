let v16 = 13;
v16--;
const v25 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,127,0,v16,5,1,0,0,7,7]);
let v37 = 96;
v37--;
const v44 = new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,v37,2,127,127,0]);
const v46 = WebAssembly.Module;
try { new v46(v25); } catch (e) {}
const v48 = WebAssembly.Module;
try { new v48(v44); } catch (e) {}
