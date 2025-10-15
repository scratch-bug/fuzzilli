function f0(a1, a2, a3) {
    class C4 {
        static #h;
        static {
            this.#h **= this;
        }
    }
    return f0;
}
const t9 = f0();
t9();
f0();
