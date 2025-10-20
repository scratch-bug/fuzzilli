class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = {
        construct(a6, a7) {
            const v9 = [1000000000000.0,0.9718499871827192,Infinity,-1000000.0,-1000000000.0,706699.1507101269,-1000.0,-1000000000.0,0.3050939298634756];
            v9[16] = a3;
            v9.includes(C0, -1082547511);
            return Reflect;
        },
    };
    function f14() {
        return this;
    }
    const v15 = new Proxy(f14, v12);
    Reflect.construct(v15, Proxy);
}
const v18 = new F1(F1, C0);
const t19 = v18.constructor;
new t19(C0);
