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
        const v17 = {
            [v9](a15, a16) {
            },
        };
        const v18 = {};
        const v19 = class {
        }
        class C20 {
        }
        function f21(a22) {
        }
        class C23 extends f21 {
        }
        for (let i26 = 0, i27 = 10; i26;) {
            function f32(a33) {
            }
        }
        const v34 = class {
        }
        class C35 {
        }
        const v36 = class {
        }
        class C37 {
        }
        class C38 {
        }
        for (const v39 in Uint8Array) {
            for (let [v40,v41,v42] of v39) {
                function F43(a45) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                class C46 extends WeakMap {
                }
                const v47 = class {
                }
                function f48() {
                }
                for (let v49 = 0; v49 < 5; v49++) {
                    const v50 = {};
                }
                function F51(a53, a54, a55, a56) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                function F57(a59, a60) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                function f61() {
                }
                const v62 = {};
                const v63 = {};
            }
        }
        const v64 = {};
        for (let i65 = 10;
            (() => {
                -i65;
                const v68 = i65 < 20000;
                v17.d >>>= 100000;
                return v68;
            })();
            i65++) {
        }
        for (let v73 = 0; v73 < 5; v73++) {
        }
        const v74 = {};
        const v75 = { done: WeakMap };
        const v76 = {};
        return v75;
    }
    return { next: f6 };
}
const v78 = Symbol.iterator;
f4.bind(null, ...{ [v78]: f5 });
