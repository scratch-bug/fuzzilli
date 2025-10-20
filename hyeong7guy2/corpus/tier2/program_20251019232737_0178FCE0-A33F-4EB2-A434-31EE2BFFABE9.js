try {
    const v35 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
    const t2 = WebAssembly.Module;
    const v38 = new t2(v35);
    function f39() {
        const t5 = [268435439,4294967297,-9007199254740992];
        t5.length = 9;
    }
    const v42 = { f: f39 };
    const v43 = { m: v42 };
    const t10 = WebAssembly.Instance;
    const v45 = new t10(v38, v43);
    const v47 = v45.exports.main;
    for (let i49 = 0; v47(), i49 < 20000; i49++) {
    }
} catch(e56) {
}
