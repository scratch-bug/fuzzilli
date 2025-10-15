function f0() {
}
class C1 extends f0 {
}
class C2 extends C1 {
}
new C2();
class C4 extends C1 {
}
new C4();
new C4();
function f7() {
}
Object.defineProperty(f7, "toString", { configurable: true, value: f7 });
class C10 {
}
const v12 = {
    get a() {
    },
};
v12.a;
function f14(a15, a16) {
    a15.a = a16;
}
for (let v17 = 0; v17 < 250; v17++) {
    const v18 = {};
    v18.a = C10;
    let v20 = v17 % 2;
    v20--;
    Object.defineProperty(v18, "a", { value: 0.7352659747889693 });
    const v24 = {
        [Symbol]() {
            v20 = this;
        },
    };
    v24.a = v24;
    let v25 = f14.bind();
}
