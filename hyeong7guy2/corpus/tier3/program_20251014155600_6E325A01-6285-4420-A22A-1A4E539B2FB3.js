function f9() {
    return WeakSet;
}
const v10 = class extends f9 {
    static {
        eval();
    }
}
