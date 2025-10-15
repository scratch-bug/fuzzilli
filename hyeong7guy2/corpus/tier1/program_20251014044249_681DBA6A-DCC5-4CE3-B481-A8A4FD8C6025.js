const v23 = {
    construct(a1, a2) {
        function F3() {
            if (!new.target) { throw 'must be called with new'; }
            function f5(a6, a7) {
                a6.p1;
            }
            for (let i10 = 0; i10 < 100000; i10++) {
                f5({ p1: 1.1 });
            }
            f5({});
        }
        new F3();
        return Reflect;
    },
};
function f25() {
    return f25;
}
const v26 = new Proxy(f25, v23);
for (let v27 = 0; v27 < 5; v27++) {
    Reflect.construct(v26, [v26,v26]);
}
