const wasmCode = new Uint8Array([0,97,115,109,1,0,0,0,1,9,2,96,1,122,0,96,0,0,2,9,1,1,109,1,102,0,0,3,2,1,1,7,8,1,4,109,97,105,110,0,1,10,22,1,20,0,253,12,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,65,16,0,11]);
const imports = { m: { f: (p) => { try { p.x = 0; } catch (e) {} } } };
const module = new WebAssembly.Module(wasmCode);
const instance = new WebAssembly.Instance(module, imports);
const main = instance.exports.main;
for (let i = 0; i < 1000; i++) {
    main();
}
main();