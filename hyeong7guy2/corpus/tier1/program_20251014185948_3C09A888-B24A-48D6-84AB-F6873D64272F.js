function f1() {
    return 750;
}
f1.valueOf = f1;
class C2 extends f1 {
}
function f3() {
    return C2;
}
Object.defineProperty(f3, "initial", { value: C2 });
const v5 = WebAssembly.Memory;
const v6 = new v5(f3);
const v7 = v6.toFixedLengthBuffer(v5, v6, 750);
try { v7.transferToFixedLength(f1, WebAssembly, C2, C2); } catch (e) {}
