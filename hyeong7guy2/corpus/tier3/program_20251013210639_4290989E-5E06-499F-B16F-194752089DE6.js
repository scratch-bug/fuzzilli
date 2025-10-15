function poc(a1) {
    let a = arguments;
    if (a1) {
    }
    let arr = [1.1,2.2,3.3,4.4];
    return a[1];
}
for (let i12 = 0; i12 < 20000; i12++) {
    poc(true);
}
poc(true);
