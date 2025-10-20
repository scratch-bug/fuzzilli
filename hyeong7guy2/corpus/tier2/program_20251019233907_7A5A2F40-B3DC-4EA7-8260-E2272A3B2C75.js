function f0(a1, a2, a3) {
    try { eval(); } catch (e) {}
    const v40 = [0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0];
    let v41;
    try { v41 = new Uint8Array(v40); } catch (e) {}
    const v43 = WebAssembly?.Module;
    let v44;
    try { v44 = new v43(v41); } catch (e) {}
    function f45() {
    }
    const v46 = { f: f45 };
    const v47 = { m: v46 };
    const v48 = WebAssembly?.Instance;
    let v49;
    try { v49 = new v48(v44, v47); } catch (e) {}
    const v51 = v49?.exports?.main;
    for (let v52 = 0; v52 < 250; v52++) {
        try { v51(); } catch (e) {}
    }
    try { f0(); } catch (e) {}
    const v64 = {
        [4](a58, a59, a60, a61) {
            for (let v62 = 0; v62 < 5; v62++) {
            }
            v40[913] ||= 1;
        },
    };
}
new Worker(f0, { type: "function" });
