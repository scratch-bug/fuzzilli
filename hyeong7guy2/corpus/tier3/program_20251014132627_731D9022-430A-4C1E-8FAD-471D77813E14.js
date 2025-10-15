function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F5() {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8) {
        for (let v9 = 0; v9 < 5; v9++) {
            function f10(a11, a12, a13) {
                const v14 = `
                    function f15(a16, a17) {
                        const v45 = {
                            get d() {
                                const v19 = [1.186082689445536];
                                function f20(a21, a22) {
                                    function f24(a25) {
                                        a25 >>> a25;
                                        return a16;
                                    }
                                    this.onmessage = f24;
                                }
                                const v29 = [f20,v19];
                                const v30 = { type: "function" };
                                const v31 = Worker(f20);
                                function F32(a34, a35) {
                                    if (!new.target) { throw 'must be called with new'; }
                                }
                                F32(f15, v31);
                                Intl.style = WeakSet;
                                Intl.DisplayNames;
                                new Int16Array(228);
                                h = v9;
                                %VerifyType(a17);
                                a16 <= F0 ? a16 : F0;
                                return v29;
                            },
                        };
                    }
                    f15(WeakSet, v9);
                    f15(a8, Promise);
                    f15(F0, v9);
                    f15(F0, 128);
                    [-4294967297];
                    function F51() {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    class C53 extends F51 {
                        static {
                        }
                    }
                    for (let v55 = 0; v55 < 5; v55++) {
                        for (let i58 = 14; i58 < 25000;) {
                            for (let v63 = 0; v63 < 5; v63++) {
                                0.25996523110726055 * v63;
                                ++i58;
                            }
                        }
                        v55 < v55;
                        v55++;
                    }
                    [WeakSet,"-4096"];
                    Symbol.iterator;
                    -65536 >>> -65536;
                    Int16Array.iterator;
                    /\ud808\udf45*(?:a{5,1000000}){3,1000000}G?/mgsy;
                `;
            }
        }
    }
    new Worker(f7, { type: "function" });
}
new F5();
