function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 49853;
    this.c = 49853;
    this.f = 49853;
}
new F0();
new F0();
new F0();
new F0();
new Uint8Array(0);
new Map();
class C12 {
    static get h() {
        return this;
    }
    [Map](a15, a16, a17, a18) {
        return 0;
    }
}
new C12();
new C12();
const v21 = new C12();
new C12();
const v24 = {
    get c() {
    },
};
const v26 = Object.create(v24);
function f27(a28, a29) {
    a28.toISOString = a29;
}
for (let i31 = 0; i31 < 20000; i31++) {
    const v38 = { a: 1 };
    const v41 = i31 % 2 ? v38 : v26;
    f27(v41, {}, 0, C12, v21);
}
let victim = { a: 1.1, b: 2.2 };
f27(victim, {});
