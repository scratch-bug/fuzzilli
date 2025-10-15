try {
    const v1 = [1337];
    const v2 = {};
    class C3 {
    }
    const v6 = new Proxy(C3, {});
    function f7() {
        Reflect.construct(C3, [], v6);
        v2.p = v1?.[0];
        return Reflect;
    }
    for (let i13 = 0; i13 < 25000; i13++) {
        f7();
    }
} catch(e20) {
}
