function f0() {
    return f0;
}
const t3 = this.DisposableStack;
const v3 = new t3();
v3.defer(f0);
