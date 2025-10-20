function f0() {
    return f0;
}
class C2 extends f0 {
}
const v4 = this.AsyncDisposableStack;
function f5() {
    return f5;
}
const v6 = new v4(C2, this);
v6.defer(C2);
v6.disposeAsync(this, f0).then(1607324420, f5);
