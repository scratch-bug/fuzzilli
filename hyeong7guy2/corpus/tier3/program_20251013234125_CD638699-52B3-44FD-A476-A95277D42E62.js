gc();
class C2 {
}
const v3 = [-60031];
function f4() {
    return C2;
}
v3[Symbol] = f4;
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11() {
        for (let i = 0; i < 50; i++) {
            const v12 = %WasmArray();
        }
    }
    a10[Symbol.toPrimitive] = f11;
    a8.propertyIsEnumerable(a10);
}
new F6(C2, C2, v3);
