try {
    try { Date(); } catch (e) {}
    const v37 = [0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0];
    let v38;
    try { v38 = new Uint8Array(v37); } catch (e) {}
    const v40 = WebAssembly?.Module;
    let v41;
    try { v41 = new v40(v38); } catch (e) {}
    function f42() {
        const v44 = [268435439,4294967297,-9007199254740992];
        try { v44.length = 9; } catch (e) {}
    }
    const v45 = { f: f42 };
    const v46 = { m: v45 };
    const v47 = WebAssembly?.Instance;
    let v48;
    try { v48 = new v47(v41, v46); } catch (e) {}
    const v50 = v48?.exports?.main;
    for (let i52 = 0;
        (() => {
            try { v50(); } catch (e) {}
            return i52 < 20000;
        })();
        i52++) {
    }
} catch(e59) {
}
