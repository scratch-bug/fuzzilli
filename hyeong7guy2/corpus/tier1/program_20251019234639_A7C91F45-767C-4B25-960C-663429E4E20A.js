for (let i1 = 0;
    i1 < 25000;
    (() => {
        %PretenureAllocationSite([-3.0,3.814557108257009e+307,4.0,-1000.0,4.0,4.281709363117322,5.0]);
        ++i1;
    })()) {
}
new BigUint64Array(1073741825);
const v46 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t9 = WebAssembly.Module;
const v49 = new t9(v46);
gc({ execution: "async" });
function f54() {
    return v49;
}
const v55 = { f: f54 };
const v56 = { m: v55 };
const t17 = WebAssembly.Instance;
const v58 = new t17(v49, v56);
v58.exports;
