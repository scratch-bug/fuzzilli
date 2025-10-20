function f4() {
    return Symbol;
}
function f5() {
    function f6() {
        class C7 extends Symbol {
        }
        const v8 = class {
        }
        const v9 = {};
        const v10 = {};
        const v11 = {};
        const v12 = class {
        }
        const v13 = {};
        const v14 = {};
        const v15 = class {
        }
        class C16 {
        }
        function f17(a18) {
            return a18;
        }
        class C19 extends f17 {
        }
        for (let i22 = 0, i23 = 10; i22;) {
            function f28(a29) {
            }
        }
        const v30 = class {
        }
        class C31 {
        }
        const v32 = class {
        }
        const v33 = v32.apply;
        try { v33(); } catch (e) {}
        class C35 {
        }
        class C36 {
        }
        for (const v37 in Uint8Array) {
            for (let [v38,v39,v40] of v37) {
                function F41(a43) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                class C44 extends WeakMap {
                }
                const v45 = class {
                }
                function f46() {
                    return WeakMap;
                }
                for (let v47 = 0; v47 < 5; v47++) {
                    const v48 = {};
                }
                function F49(a51, a52, a53, a54) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                function F55(a57, a58) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                function f59() {
                }
                const v60 = {};
                const v61 = {};
            }
        }
        function F63(a65, a66, a67) {
            if (!new.target) { throw 'must be called with new'; }
        }
        F63[64] = Map;
        for (let i69 = 0;
            (() => {
                const v71 = i69 < 20000;
                F63[64] <<= 64;
                return v71;
            })();
            i69++) {
            i69 >> i69;
        }
        const v76 = {};
        for (let v77 = 0; v77 < 5; v77++) {
        }
        for (let v78 = 0; v78 < 5; v78++) {
        }
        const v79 = {};
        const v80 = {};
        return { done: f6 };
    }
    return { next: f6 };
}
const v83 = Symbol.iterator;
f4.bind(null, ...{ [v83]: f5 });
