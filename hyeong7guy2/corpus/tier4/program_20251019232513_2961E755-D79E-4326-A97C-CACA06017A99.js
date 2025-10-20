const v0 = [0.6436339542703702,-7.098909275914159e+307];
function f1(a2, a3) {
    const t2 = Intl.Collator;
    return t2("en_IM");
}
v0.toString = f1;
Int16Array.address = v0;
class C9 extends Int16Array {
}
const v11 = WebAssembly.Memory;
try { new v11(C9); } catch (e) {}
