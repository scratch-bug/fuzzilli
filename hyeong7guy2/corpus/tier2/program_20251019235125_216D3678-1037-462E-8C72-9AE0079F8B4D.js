const v0 = [1000,-157416600,1230438875,7,2155,-509285401,9007199254740991];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
function f3(a4, a5) {
    const v9 = new Proxy(Object, {});
    return v9;
}
F1.constructor = f3;
class C10 extends F1 {
    static {
        class C13 extends this.constructor {
            8 = v0;
        }
        new C13();
    }
}
