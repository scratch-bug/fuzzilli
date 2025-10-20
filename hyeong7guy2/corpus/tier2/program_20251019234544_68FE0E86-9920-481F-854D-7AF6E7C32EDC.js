function f1(a2, a3, a4) {
    const v6 = Symbol.iterator;
    const v51 = {
        [v6]() {
            const v50 = {
                next() {
                    for (let i11 = 0, i12 = 7;
                        i12;
                        (() => {
                            function F15(a17, a18) {
                                if (!new.target) { throw 'must be called with new'; }
                                function F19(a21, a22) {
                                    if (!new.target) { throw 'must be called with new'; }
                                    function f23() {
                                        function f24(a25) {
                                            function F26(a28, a29) {
                                                if (!new.target) { throw 'must be called with new'; }
                                                function F30(a32, a33) {
                                                    if (!new.target) { throw 'must be called with new'; }
                                                }
                                                F30(this, a25);
                                            }
                                            if ([-1.7976931348623157e+308,8.038336482744185,-9.976642743805384,147.29949351140294,-2.2250738585072014e-308,7.530123123878611e+307,968240.2257603935,-572694.2347267723] === undefined) {
                                            }
                                            return this;
                                        }
                                        f24();
                                        f24();
                                        %OptimizeMaglevOnNextCall(f24);
                                        return f24;
                                    }
                                    Object.defineProperty(this, "toString", { get: f23 });
                                }
                                const v40 = new F19(i12, Symbol);
                                class C41 {
                                    static [v40](a43, a44, a45) {
                                    }
                                }
                            }
                            new F15();
                            i12--;
                        })()) {
                    }
                    return f1;
                },
            };
            return v50;
        },
    };
    const v54 = new Int16Array(882);
    new Date(Symbol, Date, 882, ...v54, ...v51);
    return f1;
}
const v59 = new Worker(f1, { type: "function" });
v59.getMessage();
