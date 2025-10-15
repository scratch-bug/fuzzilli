function f0() {
}
for (let v29 = 0; v29 < 100; v29++) {
    const v30 = class {
    }
}
for (let v31 = 0; v31 < 10; v31++) {
}
const v47 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,13,1,7,105,109,112,111,114,116,115,1,102,0,0,7,9,1,5,114,101,101,120,112,0,0]);
const t9 = WebAssembly.Module;
const v50 = new t9(v47);
const v51 = WebAssembly.Instance;
const v52 = { f: f0 };
new v51(v50, { imports: v52 });
class C55 {
}
Object.defineProperty(C55, "constructor", { value: gc });
function F57(a59, a60, a61) {
    if (!new.target) { throw 'must be called with new'; }
    const t19 = a59.constructor;
    t19();
}
new F57(C55);
for (let i66 = 0; i66 < 20000; i66++) {
}
