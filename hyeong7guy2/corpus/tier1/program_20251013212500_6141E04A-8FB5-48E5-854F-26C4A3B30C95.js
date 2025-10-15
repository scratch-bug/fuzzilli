function f1() {
    return -9007199254740992;
}
f1();
f1();
%OptimizeFunctionOnNextCall(f1);
f1();
const v40 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t8 = WebAssembly.Module;
const v43 = new t8(v40);
function f44() {
    return 0;
}
const v45 = { f: f44 };
const v46 = { m: v45 };
const t15 = WebAssembly.Instance;
new t15(v43, v46);
