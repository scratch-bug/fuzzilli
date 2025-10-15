class C0 {
}
const v1 = class {
    #valueOf(a3, a4) {
    }
    o(a6, a7, a8) {
        C0.#valueOf();
    }
}
const v10 = new v1();
try { v10.o(); } catch (e) {}
