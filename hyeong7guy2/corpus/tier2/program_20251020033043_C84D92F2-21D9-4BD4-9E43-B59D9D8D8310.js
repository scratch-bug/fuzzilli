function f0(a1, a2, a3) {
    const v6 = Symbol.iterator;
    const v41 = {
        [v6]() {
            const v40 = {
                next() {
                    for (let i11 = 0, i12 = 10; i12; i12--) {
                    }
                    for (let i21 = 0, i22 = 10;
                        i22;
                        (() => {
                            i22--;
                            const v30 = Intl.NumberFormat().formatRangeToParts(-574902674, -144.6422562264937);
                            v30.copyWithin(-5.084554891633513);
                            const v32 = {};
                            Object.defineProperty(v32, "toJSON", { configurable: true, enumerable: true, value: v30 });
                            const v34 = JSON.stringify(v32);
                            const v35 = JSON.parse;
                            v35.apply(JSON, [v34]);
                        })()) {
                    }
                },
            };
            return v40;
        },
    };
    const v44 = new Int16Array();
    new Date(Symbol, Date, 882, ...v44, ...v41);
    return a1;
}
const v49 = new Worker(f0, { type: "function" });
v49.getMessage();
