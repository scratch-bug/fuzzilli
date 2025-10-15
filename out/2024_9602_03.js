const wasm_bytes = new Uint8Array([0,97,115,109,1,0,0,0,1,10,2,96,1,110,0,96,0,1,110,3,3,2,0,1,6,7,1,110,1,208,110,11,0,240,255,255,255,15,1,97,6,6,1,127,1,65,0,11,7,17,2,3,115,101,116,0,0,3,103,101,116,0,1,10,11,2,4,0,32,0,36,0,11,3,0,35,0,11]);
WebAssembly.instantiateStreaming(Promise.resolve(wasm_bytes)).then(({instance}) => {
    function trigger(p) {
        instance.exports.set(p);
        instance.exports.get();
    }
    for (let i = 0; i < 20000; i++) {
        trigger({a:i});
    }
    trigger(new Proxy({}, {}));
}).catch(()=>{});