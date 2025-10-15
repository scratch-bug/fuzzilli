function f0() {
    return f0;
}
for (let v9 = 0; v9 < 10; v9++) {
    f0();
}
const v45 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,13,1,7,105,109,112,111,114,116,115,1,102,0,0,7,9,1,5,114,101,101,120,112,0,0]);
const t7 = WebAssembly.Module;
const v48 = new t7(v45);
const v49 = WebAssembly.Instance;
const v50 = { f: f0 };
new v49(v48, { imports: v50 });
