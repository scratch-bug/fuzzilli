function f0(a1, a2) {
    try {
        const v4 = WebAssembly.Instance;
        let v5;
        try { v5 = new v4(); } catch (e) {}
        const v6 = WebAssembly.Instance;
        let v7;
        try { v7 = new v6(); } catch (e) {}
        const v8 = v5?.exports;
        try { v8.make(); } catch (e) {}
        const v10 = v7?.exports;
        try { v10.mutate_and_get(); } catch (e) {}
    } catch(e12) {
    }
}
const v33 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,95,1,112,1,127,1,3]);
const v35 = WebAssembly.Module;
try { new v35(v33); } catch (e) {}
for (let v37 = 0; v37 < 50; v37++) {
    f0();
}
