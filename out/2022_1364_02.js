function poc(b) {
    let a = arguments;
    if (b) {}
    let arr = [1.1, 2.2, 3.3, 4.4];
    return a[1];
}

for (let i = 0; i < 20000; i++) {
    poc(true);
}

poc(true);