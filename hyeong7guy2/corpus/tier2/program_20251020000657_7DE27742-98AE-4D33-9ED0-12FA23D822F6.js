-Infinity;
const v1 = class {
    set f(a3) {
        const v5 = Symbol.iterator;
        const v40 = {
            [v5]() {
                let v7 = 10;
                const v39 = {
                    next() {
                        v7--;
                        const v11 = v7 == 0;
                        const v23 = {
                            done: v11,
                            value: v7,
                            p(a13, a14) {
                                try { Symbol(a13); } catch (e) {}
                                for (let i17 = 0; i17;) {
                                }
                            },
                            3421: 0,
                            set d(a22) {
                            },
                        };
                        let v24 = 10;
                        v24--;
                        v24 == 0;
                        const v30 = Array(3636);
                        function f31(a32, a33, a34) {
                            return f31;
                        }
                        new Worker(f31, { arguments: v30, type: "function" });
                        return v23;
                    },
                };
                return v39;
            },
        };
    }
}
new v1();
const v42 = new v1();
const v43 = new v1();
function f45(a46) {
    return a46 - a46;
}
function F48(a50, a51) {
    if (!new.target) { throw 'must be called with new'; }
    function f52() {
        function f53(a54) {
            f53[4] | 7;
            const v58 = new f45(f52);
            return v58.constructor();
        }
        f53(f52);
        f53(F48);
        %OptimizeMaglevOnNextCall(f53);
        return f53;
    }
    Object.defineProperty(this, "toString", { get: f52 });
}
const v65 = class {
    toString(a67, a68) {
        %VerifyType(a67);
        return a68;
    }
    e;
}
new v65();
const v73 = new Float64Array(1024);
const v74 = [-464609902,536870887,9,5,16,10,14088,2147483649];
const v75 = [16,12241,-1249097985];
function f76() {
    function f79(a80) {
        +"0x";
        return "0x";
    }
    Uint8Array.then = f79;
    class C83 {
        constructor(a85, a86) {
            a86.f = v74;
            a86.f = a86;
            for (let v87 = 0; v87 < 5; v87++) {
                a86 ?? a86;
                const v89 = [-869436.7485391017,-7.285830219230636,0.8526668020558238,0.0,-7.0582298932981065,-5.8107897218518545,-1000000.0];
                for (let i91 = 0;
                    i91 < 20000;
                    (() => {
                        i91++;
                        const v96 = {};
                    })()) {
                    new Array(v89[1], i91);
                }
                v87++;
                super.b >>>= v87;
            }
        }
    }
    try { new C83(487231775, v75); } catch (e) {}
}
f76();
%PrepareFunctionForOptimization(f76);
%OptimizeFunctionOnNextCall(f76);
function f105(a106, a107, a108, a109) {
    try {
    } catch(e111) {
    }
    return v42;
}
f45();
function F113(a115, a116) {
    if (!new.target) { throw 'must be called with new'; }
    function f117() {
        function f118(a119) {
            const v121 = (3)[4];
            const v122 = v121 >>> v121;
            try { F113.apply(f118, a119, a119, v121, f118); } catch (e) {}
            return v122 * v121;
        }
        %OptimizeMaglevOnNextCall(f118);
        return f118;
    }
    Object.defineProperty(this, "toString", { get: f117 });
}
f105(v73, v73, 10, v75, v43);
f76();
