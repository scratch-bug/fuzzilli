const v14 = {
    construct(a5, a6) {
        const v7 = `
        `;
        const t2 = eval.constructor;
        const t3 = t2();
        t3();
        eval();
        return Reflect;
    },
};
function f16() {
    return f16;
}
const v17 = new Proxy(f16, v14);
for (let v18 = 0; v18 < 50; v18++) {
    Reflect.construct(v17, []);
}
