function f2() {
    return f2;
}
function f3() {
    function f4() {
        const v5 = [9.883217914066156e+307,-773372.7548597748,2.2250738585072014e-308];
        const v6 = class {
            [v5](a8) {
            }
        }
        for (let i = 0; i < 5; i++) {
        }
        const t12 = Uint32Array.constructor;
        const v11 = t12();
        function F12(a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
        }
        try { F12.call(v11, f2, f3); } catch (e) {}
        class C17 extends Uint32Array {
        }
        const v19 = class {
        }
        const v20 = {};
        const v21 = {};
        const v22 = {};
        const v23 = class {
        }
        const v24 = {};
        const v25 = {};
        const v26 = class {
        }
        class C27 {
        }
        function f28(a29) {
            return a29;
        }
        class C30 extends f28 {
        }
        const v31 = class {
        }
        class C32 {
        }
        const v33 = class {
        }
        class C34 {
        }
        class C35 {
        }
        for (const v36 in Uint8Array) {
            for (let [v37,v38,v39] of 256) {
            }
        }
        const v40 = {};
        for (let i42 = 0;
            (() => {
                const v44 = i42 < 20000;
                v44 && v44;
                return v44;
            })();
            i42 & i42, i42++) {
        }
        const v50 = {};
        v50.e = v50;
        const v51 = {};
        return { done: true };
    }
    return { next: f4 };
}
const v55 = Symbol.iterator;
f2.bind(null, ...{ [v55]: f3 });
