function f1(a2, a3) {
    return f1;
}
Array[Symbol.dispose] = f1;
const v7 = this.AsyncDisposableStack;
const v8 = new v7(v7, v7);
v8.disposeAsync(Array, v8.use(Array), f1, f1);
