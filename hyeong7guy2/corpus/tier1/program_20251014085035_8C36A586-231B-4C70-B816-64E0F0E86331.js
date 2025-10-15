function f3() {
}
const v18 = {
    construct(a7, a8) {
        try { a8(f3); } catch (e) {}
        const v11 = `
        `;
        const v13 = eval.constructor;
        v13.name;
        v13();
        eval();
        return Reflect;
    },
};
function f20() {
}
const v21 = new Proxy(f20, v18);
for (let v22 = 0; v22 < 50; v22++) {
    Reflect.construct(v21, []);
}
