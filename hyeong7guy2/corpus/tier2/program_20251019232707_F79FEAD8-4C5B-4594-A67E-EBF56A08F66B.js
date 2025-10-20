const v17 = {
    construct(a1, a2) {
        const v4 = class extends Int8Array {
        }
        function f5() {
            function f6(a7, a8) {
                f6 = a7;
                function f9() {
                    return a1;
                }
                const v10 = class extends f9 {
                }
                return Int8Array;
            }
            new Worker(f6, { type: "function" });
            return f6;
        }
        v4.constructor = f5;
        v4.constructor();
        return Reflect;
    },
};
function f19() {
    return f19;
}
const v20 = new Proxy(f19, v17);
Reflect.construct(v20, Proxy);
