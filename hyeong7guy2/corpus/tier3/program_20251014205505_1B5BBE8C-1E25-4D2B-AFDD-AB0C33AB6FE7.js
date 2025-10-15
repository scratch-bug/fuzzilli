function f0() {
    return f0;
}
class C1 extends f0 {
}
class C3 extends Set {
}
Reflect.construct(this.DisposableStack, C1, C3);
