function f1(a2, a3) {
    a2.call();
    a3(3396);
    return f1;
}
new Promise(f1);
