function f0() {
    return f0;
}
class C2 extends f0 {
    static [4](a4, a5) {
    }
}
Reflect.preventExtensions(C2);
