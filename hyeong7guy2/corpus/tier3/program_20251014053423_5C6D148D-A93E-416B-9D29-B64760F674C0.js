class C1 {
    m(a3, a4, a5, a6) {
        const v10 = new Proxy(Symbol, { set: 1000.0 });
        v10.a = v10;
    }
}
const v11 = new C1();
try { v11.m(v11, v11, C1, C1); } catch (e) {}
