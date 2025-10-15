class C0 {
}
const v1 = new C0();
class C2 extends C0 {
}
const v3 = new C2();
class C4 extends C0 {
    static [v1] = C0;
    static [v3](a6, a7, a8) {
    }
}
const v13 = {
    [Symbol]() {
        let {"a":v11,"h":v12,} = C4;
    },
};
class C14 {
}
const v15 = C14.__defineGetter__;
try { new v15(v13, Symbol, v3, v15, C2); } catch (e) {}
