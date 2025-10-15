function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = class {
}
class C6 {
    constructor(a8, a9) {
    }
}
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v16 = 0; v16 < 25; v16++) {
        try {
            for (let v17 = 0; v17 < 69; v17++) {
                v5.b = C6;
            }
            async function f18(a19, a20) {
                await v5;
            }
            f18();
            const v24 = WebAssembly.Instance;
            let v25;
            try { v25 = new v24(); } catch (e) {}
            let v26;
            try { v26 = WebAssembly(); } catch (e) {}
            const v27 = v25?.exports;
            try { v27.make(); } catch (e) {}
            const v29 = v26?.exports;
            try { v29.mutate_and_get(); } catch (e) {}
        } catch(e31) {
        }
    }
}
new F10();
