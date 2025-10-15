function f1(a2) {
    let v3 = false;
    function f4(a5) {
        if (!v3) {
            try { a5(); } catch (e) {}
        }
        return a5;
    }
    for (let v7 = 0; v7 < 100; v7++) {
        f4();
    }
    v3 = true;
    function f10() {
        Array(a2);
        return f1;
    }
    return f10;
}
f1(f1);
