async function f1(a2, a3) {
    class C4 {
    }
    function f5(a6, a7) {
    }
    C4.then = f5;
    for (let v8 = 0; v8 < 50; v8++) {
        const v9 = {};
        let v11 = v8 % 2;
        v9.c = v9;
        const v12 = Symbol(a2);
        const v14 = {
            [v12]() {
                v11 = C4;
            },
        };
    }
    return C4;
}
f1();
new Uint8ClampedArray(268435441);
