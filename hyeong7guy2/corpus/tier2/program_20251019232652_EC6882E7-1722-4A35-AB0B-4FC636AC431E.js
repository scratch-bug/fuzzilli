const v0 = /(xyz{1,32}a\Bb)/dusym;
function f1() {
    return v0;
}
const v3 = Symbol.iterator;
Symbol.for(v3.description);
const v15 = {
    [v3]() {
        let v8 = 10;
        const v14 = {
            next() {
                v8--;
                const v12 = v8 == 0;
                return { done: v12, value: v8 };
            },
        };
        return v14;
    },
};
v15.c = v15;
1000000.0 != 1000000.0;
const v21 = Symbol.iterator;
const v40 = {
    [v21]() {
        let v23 = 10;
        const v29 = {
            next() {
                v23--;
                const v27 = v23 == 0;
                return { done: v27, value: v23 };
            },
        };
        return v29;
    },
    [v3]() {
        let v31;
        try { v31 = this.c(); } catch (e) {}
        const v39 = {
            next() {
                const v38 = {
                    done: 10,
                    set b(a35) {
                        v0[v31] = this;
                    },
                    set g(a37) {
                    },
                };
                return v38;
            },
        };
        return v39;
    },
};
v40.h = v40;
const v42 = Symbol.iterator;
const v60 = {
    [v42]() {
        let v44 = 10;
        const v59 = {
            next() {
                v44--;
                const v48 = v44 == 0;
                return { done: v48, value: v44 };
            },
            maxByteLength: 4096,
            [v21]() {
                return this;
            },
            [v3]() {
                let v52 = 10;
                const v58 = {
                    next() {
                        v52--;
                        const v56 = v52 == 0;
                        return { done: v56, value: v52 };
                    },
                };
                return v58;
            },
        };
        return v59;
    },
};
function F61(a63, a64, a65) {
    if (!new.target) { throw 'must be called with new'; }
    const v66 = this?.constructor;
    try { new v66(a65, a65, F61); } catch (e) {}
    a63.dotAll = a63;
    a64.h = a64;
    a65.c = a65;
    this.e = a63;
}
const v68 = new F61(v0, v15, v60);
const v69 = v68?.constructor;
try { new v69(1000000.0, 1000000.0, F61); } catch (e) {}
new Set();
new Set();
Array();
function F81(a83, a84) {
    if (!new.target) { throw 'must be called with new'; }
    try { this.propertyIsEnumerable(F81); } catch (e) {}
    function f86() {
        function f87(a88) {
            a88 ?? a88;
            const v92 = Symbol.iterator;
            v92.description;
            const v113 = {
                [v92]() {
                    function f96(a97, a98) {
                        function f99(a100) {
                        }
                        const v101 = %WasmStruct();
                    }
                    new Worker(f96, { type: "function" });
                    10 % 10;
                    const v109 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    Date.calendar = Date;
                    function f111() {
                    }
                    const v112 = {};
                    return v109;
                },
            };
            function f116(a117) {
            }
            class C118 extends f116 {
                static set g(a120) {
                }
            }
            const v121 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v121, ...v113);
        }
        return f87;
    }
    Object.defineProperty(this, "toString", { get: f86 });
}
const v123 = new F81();
class C124 {
    static [v123](a126, a127, a128) {
    }
}
class C129 {
    static [v123](a131, a132, a133) {
    }
    static [v123](a135, a136, a137) {
    }
}
const v138 = {};
class C139 {
}
