class C0 {
}
class C1 extends C0 {
    set g(a3) {
    }
}
const v4 = new C1();
const v5 = {};
for (let v6 = 0; v6 < 5; v6++) {
    const v8 = {
        get f() {
            return this;
        },
        __proto__: v4,
    };
    (2 ? v8 : v5).g;
}
