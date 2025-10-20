function f4() {
    return Uint8Array;
}
function f5() {
    function f6() {
        const v7 = {};
        v7.d = f6;
        const v8 = class {
        }
        class C9 {
        }
        function f10(a11) {
            return v7;
        }
        class C12 extends f10 {
        }
        for (let i15 = 0, i16 = 10; i15;) {
            function f21(a22) {
                return a22;
            }
        }
        const v23 = class {
        }
        class C24 {
        }
        const v25 = class {
        }
        class C26 {
        }
        class C27 {
        }
        const v29 = Date.getFullYear;
        try { v29.call(); } catch (e) {}
        for (const v31 in Uint8Array) {
            for (let [v32,v33,v34] of v31) {
                function F35(a37) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                class C38 extends WeakMap {
                }
                const v39 = class {
                }
                function f40() {
                    return Symbol;
                }
                for (let v41 = 0; v41 < 5; v41++) {
                    const v42 = {};
                    function f43() {
                    }
                    class C44 extends f43 {
                    }
                    class C45 {
                    }
                    for (let v46 = 0; v46 < 5; v46++) {
                    }
                }
                function F47(a49, a50, a51, a52) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                function F53(a55, a56) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                function f57() {
                }
                const v58 = {};
                const v59 = {};
            }
        }
        const v60 = {};
        for (let i61 = 10;
            (() => {
                const v63 = i61 < 20000;
                v7.d >>>= 100000;
                return v63;
            })();
            i61++) {
            i61 >>> i61;
        }
        for (let v69 = 0; v69 < 5; v69++) {
        }
        const v70 = {};
        const v71 = {};
        return { done: v8 };
    }
    return { next: f6 };
}
const v74 = Symbol.iterator;
f4.bind(null, ...{ [v74]: f5 });
