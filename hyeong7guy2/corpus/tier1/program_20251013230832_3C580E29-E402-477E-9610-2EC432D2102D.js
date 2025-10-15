const v8 = {
    construct(a6, a7) {
        return a7;
    },
};
function f10() {
}
const v11 = new Proxy(f10, v8);
for (let i13 = 0; i13 < 25000; i13++) {
    Reflect.construct(v11, []);
}
