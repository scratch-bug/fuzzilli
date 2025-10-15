function poc(b) {
    function f() {}
    f();
    try {
        if (b) {
            throw 1;
        }
    } catch (e) {
        return arguments[1];
    }
}

for (let i = 0; i < 20000; i++) {
    poc(false, 1.1);
}

poc(true);