try {
    class C0 {
    }
    const v2 = {};
    v2.defineProperty = C0;
    const v3 = new Proxy(C0, v2);
    v3.a = v3;
} catch(e4) {
}
