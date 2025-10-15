for (let i1 = 0;
    (() => {
        let v2 = 10000;
        function f3(a4) {
            const v7 = {
                construct: f3,
                a: v2,
                next() {
                    v2--;
                },
            };
            return v7;
        }
        f3();
        return i1 < v2;
    })();
    i1++) {
}
for (let v13 = 0; v13 < 100; v13++) {
    const v15 = class {
        e = 1000000000.0;
    }
    new v15();
}
