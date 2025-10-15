function f4() {
    return 10;
}
function f5() {
    function f6() {
        const v7 = {};
        const v8 = class {
        }
        const v9 = new Uint8Array(10, 10, 10);
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
            const v25 = {};
            v25.c = v11;
            return v25;
        }
        class C26 extends f23 {
        }
        for (let i29 = 0, i30 = 10; i29;) {
            function f35(a36) {
                return a36;
            }
        }
        const v37 = class {
        }
        class C38 {
        }
        const v39 = class {
        }
        class C40 {
        }
        class C41 {
        }
        for (const v42 in Uint8Array) {
            for (let [v43,v44,v45] of v42) {
                function F46(a48) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                class C49 extends WeakMap {
                }
                const v50 = class {
                }
                function f51() {
                }
                for (let v52 = 0; v52 < 5; v52++) {
                    const v53 = {};
                }
                function F54(a56, a57, a58, a59) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                function F60(a62, a63) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                function f64() {
                }
                const v65 = {};
                const v66 = {};
            }
        }
        const v67 = {};
        for (let i68 = 10;
            (() => {
                const v70 = i68 < 20000;
                v19.d >>>= 100000;
                return v70;
            })();
            i68++) {
        }
        for (let v75 = 0; v75 < 5; v75++) {
        }
        const v76 = {};
        const v77 = {};
        const v78 = { done: WeakMap };
        const v79 = {};
        return v78;
    }
    return { next: f6 };
}
const v81 = Symbol.iterator;
f4.bind(null, ...{ [v81]: f5 });
