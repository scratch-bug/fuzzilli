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
                        const v40 = {
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
                    function F46() {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    class C48 extends F46 {
                        static {
                        }
                    }
                    for (let v50 = 0; v50 < 5; v50++) {
                        v50 < v50;
                        v50++;
                    }
                    [WeakSet,"-4096",false];
                    Symbol.iterator;
                    -65536 >>> -65536;
                    Int16Array.iterator;
                    /\ud808\udf45*(?:a{5,1000000}){3,1000000}G?/mgsy;
                    function F63(a65, a66, a67) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                `;
                return a13;
            }
        }
        return f7;
    }
    new Worker(f7, { type: "function" });
}
new F5();
