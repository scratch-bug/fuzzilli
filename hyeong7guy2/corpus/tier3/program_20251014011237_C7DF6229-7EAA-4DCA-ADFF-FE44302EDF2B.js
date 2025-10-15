function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -4096;
}
let {"b":v5,"length":v6,...v7} = 7;
const v8 = new F1();
for (let i10 = 0;
    (() => {
        const v12 = i10 < 20000;
        Reflect.apply(Symbol, v8.f, [v5]);
        return v12;
    })();
    ++i10) {
}
