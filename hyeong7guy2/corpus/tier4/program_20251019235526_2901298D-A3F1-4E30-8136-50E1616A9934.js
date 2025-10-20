const v1 = class {
    [-32010]() {
    }
}
new Date(v1);
class C5 {
}
function f6(a7) {
    function f9(a10) {
    }
    function f11(a12) {
        f9();
        try { WebAssembly.promising(); } catch (e) {}
    }
    for (let i17 = 0; i17 <= 100; ++i17) {
        f11(i17);
    }
}
C5.constructor = f6;
const t19 = C5.constructor;
t19();
