function f0(a1) {
    function f2() {
    }
    f2();
    try {
        if (a1) {
            throw 1;
        }
    } catch(e5) {
        arguments[1];
    }
}
for (let i9 = 0; i9 < 20000; i9++) {
    f0(false, 1.1);
}
f0(true);
