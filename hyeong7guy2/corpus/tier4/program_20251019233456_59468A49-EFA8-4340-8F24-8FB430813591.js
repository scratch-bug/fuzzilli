function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        const v42 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,65535]);
        WebAssembly.compile(v42).catch(Array);
        function f46() {
            return 7;
        }
        WebAssembly.compileStreaming(Array, a5).catch(f46);
    }
}
new v3(v3, F0);
