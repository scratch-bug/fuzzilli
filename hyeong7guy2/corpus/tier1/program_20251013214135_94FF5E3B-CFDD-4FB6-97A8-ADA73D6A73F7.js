let v0 = false;
class C1 {
}
function f3(a4, a5) {
    if (v0) {
        /VM/imug;
        const v7 = %WasmArray();
    }
    return a4;
}
const v9 = new Proxy(C1, { construct: f3 });
for (let i11 = 0; i11 < 25000; ++i11) {
    new v9();
}
v0 = true;
