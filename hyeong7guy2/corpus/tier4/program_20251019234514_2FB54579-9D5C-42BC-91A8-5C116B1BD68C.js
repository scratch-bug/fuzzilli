const v0 = class {
}
class C1 extends v0 {
}
function f2(a3) {
    return a3;
}
class C4 extends f2 {
    static #o(a6, a7) {
        this.#o();
    }
}
try { C1["instant"](); } catch (e) {}
