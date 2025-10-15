function f0() {
    return f0;
}
class C2 extends f0 {
}
this.BigInt.asUintN(C2, true);
