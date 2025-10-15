function f0() {
    return f0;
}
const v1 = class {
    static #n(a3, a4, a5, a6) {
    }
    static {
        try {
            f0.#n();
        } catch(e9) {
        }
    }
}
