function f1(a2, a3) {
    return f1;
}
const v5 = Symbol.dispose;
this[v5] = f1;
const v6 = this.AsyncDisposableStack;
const v7 = new v6(Symbol, v5, v6, v5, this);
v7.use(this);
