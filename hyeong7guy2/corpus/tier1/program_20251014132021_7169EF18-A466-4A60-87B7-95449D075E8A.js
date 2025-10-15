function f0() {
    return f0;
}
class C1 extends f0 {
    static get d() {
        let v2 = this;
        v2[Symbol.unscopables] = C1;
        return --v2;
    }
}
with (C1) {
    d[4] = d;
}
