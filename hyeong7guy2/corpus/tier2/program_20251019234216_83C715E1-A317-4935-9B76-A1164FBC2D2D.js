class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = {
        construct(a6, a7) {
            const v10 = [1000000000000.0,0.9718499871827192,Infinity,-1000000.0,-1000000000.0,706699.1507101269,-1000.0,-1000000000.0,0.3050939298634756];
            v10[21] = 12;
            v10.includes(C0, -1082547511);
            return Reflect;
        },
    };
    function f15() {
        return v13;
    }
    const v16 = new Proxy(f15, v13);
    Reflect.construct(v16, Proxy);
}
new F1();
