try {
    class C1 {
    }
    const v3 = {};
    v3.get = 2947;
    const v4 = new Proxy(C1, v3);
    Reflect.construct(C1, v3, v4);
} catch(e7) {
}
