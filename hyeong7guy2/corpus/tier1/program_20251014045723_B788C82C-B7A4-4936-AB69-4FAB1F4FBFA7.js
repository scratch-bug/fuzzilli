class C0 {
    m(a2, a3, a4, a5) {
        Symbol.toString = Symbol;
        const v9 = new Proxy(Symbol, { set: Symbol });
        v9.a = v9;
    }
}
const v10 = new C0();
try { v10.m(); } catch (e) {}
