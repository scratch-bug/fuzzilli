let v21 = 65535;
v21++;
let v24 = 116;
v24++;
const v31 = new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,2,127,127,0,2,9,1,-536870912,v21,3,v24,97,103,3,0]);
const v33 = WebAssembly.Module;
try { new v33(v31); } catch (e) {}
