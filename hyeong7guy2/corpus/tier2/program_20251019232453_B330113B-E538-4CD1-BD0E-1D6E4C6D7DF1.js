const v20 = {
    construct(a1, a2) {
        const v4 = class extends Int8Array {
        }
        function f5() {
            function f6(a7, a8) {
                f6 = a7;
                const v13 = {
                    p(a10, a11, a12) {
                        super.h *= a1;
                        return a1;
                    },
                };
                return v13;
            }
            const v17 = new Worker(f6, { type: "function" });
            return v17;
        }
        v4.constructor = f5;
        v4.constructor();
        return Reflect;
    },
};
function f22() {
    return f22;
}
const v23 = new Proxy(f22, v20);
Reflect.construct(v23, Proxy);
