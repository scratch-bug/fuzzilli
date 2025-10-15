const v20 = {
    construct(a1, a2) {
        function F3() {
            if (!new.target) { throw 'must be called with new'; }
            function f5(a6, a7) {
                return this;
            }
            for (let i9 = 0; i9 < 100000; i9++) {
                f5({ p1: -9.768802896921503e+307 });
            }
        }
        new F3();
        return Reflect;
    },
};
function f22() {
    return f22;
}
const v23 = new Proxy(f22, v20);
for (let v24 = 0; v24 < 5; v24++) {
    Reflect.construct(v23, v23);
}
