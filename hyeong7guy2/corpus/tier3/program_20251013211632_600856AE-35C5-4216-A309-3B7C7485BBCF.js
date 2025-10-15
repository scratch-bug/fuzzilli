function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    WebAssembly.Module;
    for (let v15 = 0; v15 < 50; v15++) {
        try {
            const v19 = WebAssembly.Instance;
            let v20;
            try { v20 = new v19(); } catch (e) {}
            const v21 = WebAssembly.Instance;
            let v22;
            try { v22 = new v21(); } catch (e) {}
            const v23 = v20?.exports;
            try { v23.make(); } catch (e) {}
            const v25 = v22?.exports;
            try { v25.mutate_and_get(); } catch (e) {}
        } catch(e27) {
        }
    }
}
new F5();
for (let i30 = 0; i30 < 20000;) {
    i30 * i30;
    ++i30;
}
