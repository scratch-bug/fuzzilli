function trigger(is_trigger) {
    class C {
        constructor() {
            this.p = 1;
        }
    }
    const P = new Proxy(C, {
        construct(target, args) {
            return Reflect.construct(target, args);
        }
    });
    if (is_trigger) {
        const o1 = Reflect.construct(P, []);
        const o2 = [1.1, 2.2, 3.3, 4.4];
        return o1.p;
    }
    return null;
}
for (let i = 0; i < 200000; ++i) {
    trigger(false);
}
trigger(true);