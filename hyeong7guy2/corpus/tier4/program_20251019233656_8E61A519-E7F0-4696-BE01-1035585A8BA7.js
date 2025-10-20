function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v38 = new Uint8Array([0,97,115,109,1,0,-4294967296,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,F0]);
WebAssembly.compile(v38).catch(Array);
