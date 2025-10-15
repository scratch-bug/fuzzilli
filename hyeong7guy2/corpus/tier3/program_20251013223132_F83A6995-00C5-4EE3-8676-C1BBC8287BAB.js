function f1(a2, a3) {
    return a2 >= 0n;
}
WeakSet.constructor = f1;
const t4 = WeakSet.constructor;
t4();
