function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = F1;
    this.d = 127;
    this.e = 127;
    this.f = 127;
}
new F1();
new F1();
/a??/iusyd;
gc();
const v47 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v89 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f90() {
    const v92 = WebAssembly.compile(v47);
    function f93(a94, a95) {
    }
    v92.constructor = f93;
    const v96 = await v92;
    const v98 = await WebAssembly.compile(v89);
    const t20 = WebAssembly.Instance;
    const v100 = new t20(v96);
    const v101 = WebAssembly.Instance;
    const v102 = v100.exports;
    const v103 = v102.exp;
    const v104 = { imp: v103 };
    const v106 = new v101(v98, { env: v104 });
    const v107 = v106.exports;
    const v109 = WebAssembly.promising(v107.re_exp);
    v109(v109, v107);
    return v102;
}
f90();
