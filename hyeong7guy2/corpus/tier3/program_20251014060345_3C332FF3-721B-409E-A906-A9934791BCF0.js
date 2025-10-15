function f0() {
    return f0;
}
const v1 = [-1000000000.0,1000000.0,328386.0661779407];
const v2 = class {
    #c = f0;
    set a(a4) {
        try {
            v1.#c;
        } catch(e6) {
        }
    }
}
const v7 = new v2();
const t14 = v7.constructor;
const v9 = new t14();
v9.a = v9;
