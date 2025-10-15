function f1(a2) {
    const v3 = [a2];
    for (let i6 = (() => {
            function f4() {
            }
            return 0;
        })();
        30000;
        i6++) {
        v3[8] = 2;
    }
    function f12() {
        return a2;
    }
    const v13 = Symbol.iterator;
    a2.bind(a2, ...{ [v13]: f12 });
}
new Worker(f1, { type: "function" });
for (let i21 = 0; i21 < 20000; i21++) {
}
