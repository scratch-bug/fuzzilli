const v1 = class extends Uint8ClampedArray {
}
const v9 = {
    construct(a3, a4) {
        a4[1] = a4;
        const v6 = Date.setUTCHours;
        try { v6.call(); } catch (e) {}
        return {};
    },
};
v9.construct(v1, v1);
function f12() {
}
const v13 = new Proxy(f12, v9);
for (let v14 = 0; v14 < 50; v14++) {
    Reflect.construct(v13, []);
}
