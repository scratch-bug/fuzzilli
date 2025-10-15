function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F1("257");
const v5 = new F1(v4);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
}
new F6(v5, v5);
function f11(a12, a13) {
    Reflect.construct(a13, a12);
    a12[0] + 1;
}
const v26 = {
    construct(a20, a21) {
        const t0 = a21[0];
        t0[0] = 1.1;
        return Reflect.construct(a20, a21, a20);
    },
};
const handler = v26;
function f29() {
}
const v30 = new Proxy(f29, handler);
const proxy = v30;
for (let v33 = 0; v33 < 250; v33++) {
    v33 < 25000;
    f11([1,2], proxy);
    v33++;
}
f11([0,2], proxy);
