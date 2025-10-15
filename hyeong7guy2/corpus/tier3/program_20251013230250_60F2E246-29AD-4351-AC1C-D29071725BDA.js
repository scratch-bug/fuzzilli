class C3 {
}
const v4 = C3.bind(3.146922200034572);
try { v4.constructor(v4); } catch (e) {}
function f6(a7) {
    function f10(a11) {
    }
    function f12(a13) {
        let func = f10;
        const t9 = func?.constructor;
        t9(func);
        if (100) {
            func = WebAssembly;
        }
        try { WebAssembly.promising(func); } catch (e) {}
    }
    for (let i20 = 0; i20 <= 100; ++i20) {
        f12(i20);
    }
}
C3.constructor = f6;
const t21 = C3.constructor;
t21();
[380579.3287792185,-5.28376634559282];
