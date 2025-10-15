const v1 = new Map();
const v4 = !(+Map);
v1 || Map;
Math.log2(v4);
class C7 {
}
new C7();
let v10 = false;
function f11(a12) {
    if (!a12) {
        return;
    }
    function f14() {
    }
    for (let v15 = 0; v15 < 5; v15++) {
        f14();
        for (let i18 = 0; i18 < 20000; i18++) {
        }
    }
    const v26 = { execution: "sync" };
    gc();
    function f28() {
    }
    WebAssembly.instantiateStreaming().catch(f28);
}
for (let i33 = 0; i33 < 25000; i33++) {
    if (i33 === 24999) {
        v10 = true;
    }
    f11(v10);
}
