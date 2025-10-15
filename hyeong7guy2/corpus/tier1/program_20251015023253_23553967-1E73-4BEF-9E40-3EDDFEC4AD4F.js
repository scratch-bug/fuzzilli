function f0() {
    return f0;
}
class C1 extends f0 {
}
const v7 = {
    construct(a3, a4) {
        try { a4.reduceRight(a3); } catch (e) {}
        new C1();
        return a3;
    },
};
function f9() {
}
const v10 = new Proxy(f9, v7);
for (let v11 = 0; v11 < 250; v11++) {
    Reflect.construct(v10, []);
}
