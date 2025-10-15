function f0() {
    return f0;
}
class C1 extends f0 {
}
JSON.stringify(0, C1.constructor);
