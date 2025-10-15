function f1() {
    return f1;
}
const v43 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,13,1,7,105,109,112,111,114,116,115,1,102,0,0,7,9,1,5,114,101,101,120,112,0,0]);
const t4 = WebAssembly.Module;
const v46 = new t4(v43);
const v47 = WebAssembly.Instance;
const v48 = { f: f1 };
new v47(v46, { imports: v48 });
