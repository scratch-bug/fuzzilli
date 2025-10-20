function f1() {
    class C2 {
    }
    new C2();
    class C4 extends C2 {
    }
    function f5(a6, a7, a8) {
        for (let v10 = 0; v10 < 50; v10++) {
            let index = -2147483649;
            index << 1;
        }
    }
    new Worker(f5, { type: "function" });
    new C4();
    new C4();
    for (let i21 = 0; i21 < 20000; ++i21) {
    }
}
({ construct: f1 }).construct();
