try {
    class C0 {
    }
    const v2 = {};
    function f3(a4) {
        return f3;
    }
    v2.get = f3;
    const v5 = new Proxy(C0, v2);
    Reflect.construct(C0, [v2], v5);
} catch(e9) {
}
