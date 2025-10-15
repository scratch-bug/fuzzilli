function f0() {
    return f0;
}
class C1 extends f0 {
}
const v5 = {
    [C1](a3, a4) {
    },
};
Object.defineProperty(Object, "h", v5);
