try {
    const v0 = class {
    }
    function f2(a3, a4) {
        a3[4] = a3;
        const v6 = Reflect.toString;
        try { new v6(); } catch (e) {}
        Reflect.construct(a4, a3).constructor();
    }
    const v10 = {};
    function f12() {
    }
    const v13 = new Proxy(f12, v10);
    for (let v14 = 0; v14 < 250; v14++) {
        f2([1,2,Set,v0,v14], v13);
    }
    f2([], v13);
} catch(e21) {
}
