const v19 = {
    construct(a1, a2) {
        const v4 = class extends Int8Array {
        }
        function f5() {
            function f6(a7, a8) {
                f6 = a7;
                const v12 = {
                    construct(a10, a11) {
                        return a10;
                    },
                };
                return this;
            }
            const v15 = { type: "function" };
            new Worker(f6, v15);
            return v15;
        }
        v4.constructor = f5;
        v4.constructor();
        return Reflect;
    },
};
function f21() {
    return f21;
}
const v22 = new Proxy(f21, v19);
Reflect.construct(v22, Proxy);
