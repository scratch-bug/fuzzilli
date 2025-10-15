function f4() {
    return WeakMap;
}
function f5() {
    function f6() {
        const v7 = {};
        const v8 = class {
        }
        class C9 {
        }
        function f10(a11) {
            return f6;
        }
        class C12 extends f10 {
        }
        for (let i15 = 0, i16 = 10; i15;) {
            function f21(a22) {
                return Symbol;
            }
        }
        let v23 = class {
        }
        class C24 {
        }
        const v25 = class {
        }
        class C26 {
        }
        class C27 {
        }
        for (const v28 in Uint8Array) {
            for (let [v29,v30,v31] of v28) {
                function F32(a34) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                class C35 extends WeakMap {
                }
                const v36 = class {
                }
                function f37() {
                }
                for (let v38 = 0; v38 < 5; v38++) {
                    const v39 = {};
                    function f40() {
                    }
                    class C41 extends f40 {
                    }
                    class C42 {
                    }
                    for (let v43 = 0; v43 < 5; v43++) {
                    }
                }
                function F44(a46, a47, a48, a49) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                function F50(a52, a53) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                function f54() {
                    return f6;
                }
                const v55 = {};
                const v56 = {};
            }
        }
        const v57 = {};
        for (let i58 = 10;
            (() => {
                const v60 = i58 < 20000;
                v7.d >>>= 100000;
                return v60;
            })();
            i58++, v23--) {
        }
        for (let v66 = 0; v66 < 5; v66++) {
        }
        const v67 = {};
        const v68 = {};
        return { done: v8 };
    }
    return { next: f6 };
}
const v71 = Symbol.iterator;
f4.bind(null, ...{ [v71]: f5 });
