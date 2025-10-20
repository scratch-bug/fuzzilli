function f4() {
    return f4;
}
function f5() {
    function f6() {
        const v7 = {};
        const v8 = class {
        }
        const v9 = new Uint8Array();
        const v10 = {};
        const v11 = {};
        const v12 = {};
        const v13 = class {
        }
        const v19 = {
            set g(a15) {
            },
            [v9](a17, a18) {
            },
        };
        const v20 = {};
        const v21 = class {
        }
        class C22 {
        }
        function f23(a24) {
            return a24;
        }
        class C25 extends f23 {
        }
        for (let i28 = 0, i29 = 10; i28;) {
            function f34(a35) {
                return 10;
            }
        }
        const v36 = class {
        }
        class C37 {
        }
        const v38 = class {
        }
        class C39 {
        }
        class C40 {
        }
        for (const v41 in Uint8Array) {
            for (let [v42,v43,v44] of v41) {
                function F45(a47) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                class C48 extends WeakMap {
                }
                const v49 = class {
                }
                function f50() {
                }
                for (let v51 = 0; v51 < 5; v51++) {
                    const v52 = {};
                }
                function F53(a55, a56, a57, a58) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                function F59(a61, a62) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                function f63() {
                    return 10;
                }
                const v64 = {};
                const v65 = {};
            }
        }
        const v66 = {};
        for (let i67 = 10;
            (() => {
                const v69 = i67 < 20000;
                v19.d >>>= 100000;
                return v69;
            })();
            i67++) {
        }
        for (let v74 = 0; v74 < 5; v74++) {
        }
        const v75 = {};
        const v76 = {};
        const v77 = { done: WeakMap };
        const v78 = {};
        return v77;
    }
    return { next: f6 };
}
const v80 = Symbol.iterator;
f4.bind(null, ...{ [v80]: f5 });
