try {
    [];
    function f3() {
    }
    1087 << 1087;
    class C6 extends f3 {
        static set d(a8) {
        }
    }
    %PretenureAllocationSite(null);
    C6.a = C6;
    function f11() {
    }
    class C12 extends f11 {
        set c(a14) {
        }
    }
    const v15 = {};
    for (let v16 = 0; v16 < 5; v16++) {
    }
    class C19 {
    }
    for (let i21 = 0;
        i21 < 1000;
        (() => {
            ~(i21++);
            const v36 = {
                p(a28, a29, a30, a31) {
                    new a29();
                    a30 ?? a30;
                    const v34 = a28 / 206;
                    v34 | v34;
                },
            };
            v36.p(v36, C19);
            function F38() {
                if (!new.target) { throw 'must be called with new'; }
                new SharedArrayBuffer(128, { maxByteLength: 2147483649 });
            }
            new F38();
        })()) {
    }
} catch(e47) {
}
