const v38 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v80 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
WebAssembly.compile(v38);
WebAssembly.compile(v80);
for (let v84 = 0; v84 < 500; v84++) {
    function F85() {
        if (!new.target) { throw 'must be called with new'; }
        new SharedArrayBuffer(128, { maxByteLength: 2147483649 });
    }
    new F85();
}
