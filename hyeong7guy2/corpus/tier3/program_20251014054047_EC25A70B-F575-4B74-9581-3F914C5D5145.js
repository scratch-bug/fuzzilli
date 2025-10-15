function f1(a2) {
    return f1;
}
Set[Symbol.dispose] = f1;
const t4 = this.DisposableStack;
const v7 = new t4();
v7.use(Set);
