const wasmCode = new Uint8Array([0,97,115,109,1,0,0,0,1,15,3,96,1,113,1,124,96,0,1,113,96,0,0,2,31,2,95,1,127,1,127,95,1,126,1,126,3,4,3,0,0,1,7,22,2,4,109,97,105,110,0,2,8,99,114,101,97,116,101,95,65,0,1,10,72,2,61,1,1,124,4,112,64,2,112,64,32,0,23,2,1,110,110,12,0,19,4,112,64,32,0,251,7,1,0,11,19,1,110,64,26,68,0,0,0,0,0,0,69,64,11,11,251,3,1,0,11,15,1,8,1 an,0,65,152,196,154,137,1,251,1,0,11]);
const wasmModule = new WebAssembly.Module(wasmCode);
const instance = new WebAssembly.Instance(wasmModule);
const { main, create_A } = instance.exports;

let p = create_A();

for (let i = 0; i < 100; i++) {
    try {
        main(p);
    } catch (e) {
    }
}

try {
    main(p);
} catch (e) {
}