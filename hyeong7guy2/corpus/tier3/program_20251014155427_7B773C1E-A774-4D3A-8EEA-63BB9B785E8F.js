function f1(a2, a3, a4) {
    a3();
    return Error;
}
const v7 = new Promise(f1);
v7.then(Promise, Error);
