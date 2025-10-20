class C1 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = C1;
}
class C6 extends F2 {
}
const v7 = new C6();
const v8 = [1000000000.0,-4.0];
const v9 = class {
}
const v10 = /xyz{1,}/dmv;
const v13 = Uint8Array.name;
function f15(a16, a17, a18) {
    const v19 = { [a17]: v9, f: a17, ...a16 };
    return v9;
}
f15();
f15(v13, "a");
f15(C6, Uint16Array);
f15(v8, Uint8Array);
f15(C6, v10);
f15(v7, Symbol);
