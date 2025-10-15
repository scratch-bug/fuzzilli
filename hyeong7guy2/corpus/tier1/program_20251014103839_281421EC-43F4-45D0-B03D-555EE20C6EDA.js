const v8 = {
    construct(a1, a2) {
        a2[0] = 1.1;
        const v5 = Reflect.construct(a1, a2);
        const v6 = v5.constructor;
        try { v6(a2); } catch (e) {}
        return v5;
    },
};
function f10() {
    return f10;
}
f10.prototype = f10;
const v11 = new Proxy(f10, v8);
const v14 = [0,2];
v14.fill(v11);
Reflect.construct(v11, v14);
