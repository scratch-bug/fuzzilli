const v0 = {};
function f1(a2) {
    v0.p1 = a2;
    return f1;
}
for (let i4 = 0;
    (() => {
        const v6 = i4 < 20000;
        for (let v7 = 0; v7 < 5; v7++) {
            function f9() {
                return v0;
            }
            eval();
        }
        return v6;
    })();
    ++i4) {
    f1(2.2);
}
