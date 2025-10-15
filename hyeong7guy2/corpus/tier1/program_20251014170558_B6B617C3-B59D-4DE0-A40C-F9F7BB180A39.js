const v2 = Symbol.iterator;
const v17 = {
    [v2]() {
        let v4 = 10;
        const v16 = {
            next() {
                v4--;
                function f7(a8, a9, a10) {
                    Object.defineProperty(this, 4294967296, { writable: true, configurable: true, value: a10 });
                    return f7;
                }
                new Promise(f7);
                const v14 = v4 == 0;
                return { done: v14 };
            },
        };
        return v16;
    },
};
class C18 extends Int32Array {
}
new C18(v17);
