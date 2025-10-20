function f0(a1, a2, a3) {
    const v6 = Symbol.iterator;
    const v29 = {
        [v6]() {
            const v28 = {
                next() {
                    class C9 {
                    }
                    class C10 extends C9 {
                        #n(a12, a13) {
                        }
                        constructor(a15, a16) {
                            super();
                            function f17(a18, a19) {
                                return C9;
                            }
                            function f20() {
                                return f17;
                            }
                        }
                    }
                    const v22 = {};
                    0 in v22;
                    for (let v24 = 0; v24 < 25; v24++) {
                        function f25(a26) {
                            return v22;
                        }
                    }
                    for (let v27 = 0; v27 < 5; v27++) {
                    }
                    return a3;
                },
            };
            return v28;
        },
    };
    const v32 = new Int16Array();
    new Date(Symbol, Date, 882, ...v32, ...v29);
    return f0;
}
const v36 = { type: "function" };
const v37 = new Worker(f0, v36);
v37.getMessage(v36, v37, f0);
