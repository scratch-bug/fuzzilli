try {
    const v0 = [-2,1876025572];
    function f1() {
        return v0;
    }
    new Date();
    const v4 = class {
        #m(a6, a7) {
            try {
                try { new f1(); } catch (e) {}
                class C9 {
                }
                !(25906 ?? C9);
            } catch(e13) {
            }
        }
        static #b;
    }
    new v4();
    function F15(a17, a18) {
        if (!new.target) { throw 'must be called with new'; }
        function f19(a20, a21, a22) {
            function F23(a25, a26, a27, a28) {
                if (!new.target) { throw 'must be called with new'; }
                function f29() {
                    return a17;
                }
                function f30(a31) {
                    let v32 = 1;
                    v32--;
                    for (let v34 = 0; v34 < 5; v34++) {
                        v32 * v34;
                        const v37 = {
                            get g() {
                                return a18;
                            },
                        };
                    }
                    return a20;
                }
                Object.defineProperty(this, "e", { get: f29, set: f30 });
            }
            let v38;
            try { v38 = new F23(F15, F15, this, a21); } catch (e) {}
            try { v38.e = v38; } catch (e) {}
            return a18;
        }
        try { f19(F15, F15, a17); } catch (e) {}
        %OptimizeFunctionOnNextCall(f19);
    }
    const v40 = new v4();
    try { v40.constructor(); } catch (e) {}
    const v42 = new v4();
    try { v42.constructor(); } catch (e) {}
    let v45 = 1000;
    v45--;
    for (let i49 = 0, i50 = 10;
        i49++, i50;
        (() => {
            let v54 = i50 >>> i50;
            v54++;
            i50--;
        })()) {
        const v60 = {};
        const v61 = {};
        const v62 = {};
        const v63 = {};
        function f64() {
        }
        const v65 = {};
        Array(1048576);
    }
    const v67 = new Array(v45);
    new Map();
    class C70 {
        set d(a72) {
        }
        #o(a74, a75) {
            return v67;
        }
    }
    const v76 = new C70();
    const t82 = v76.constructor;
    new t82();
    new Map();
    function F80(a82, a83, a84, a85) {
        if (!new.target) { throw 'must be called with new'; }
    }
    F80.length;
    new WeakRef(F80);
    function f89() {
        return f89;
    }
} catch(e90) {
}
