const v1 = class extends Uint8ClampedArray {
}
const v10 = {
    construct(a3, a4) {
        a4[1] = a4;
        const t1 = a4[0];
        t1[0] = 1.1;
        try { Reflect(Reflect, a4, 1.1, v1, Reflect); } catch (e) {}
        return Reflect.construct(a3, a4);
    },
};
try { v10.construct(v1, v1); } catch (e) {}
function f13() {
}
const v14 = new Proxy(f13, v10);
v14.prototype = v14;
for (let v15 = 0; v15 < 100; v15++) {
    Reflect.construct(v14, [1]).name;
}
