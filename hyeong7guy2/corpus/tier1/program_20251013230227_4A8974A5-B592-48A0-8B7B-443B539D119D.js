class C3 {
    static {
        try { this.p("function", this); } catch (e) {}
    }
    ["function"](a7, a8) {
        return a7;
    }
}
const v9 = new C3();
const v10 = new C3();
const v11 = [848059.4771981025,-2.220446049250313e-16,-2.2250738585072014e-308,-332.131070194289,-2.220446049250313e-16,1e-15];
class C13 extends C3 {
    static set h(a15) {
        ("function").localeCompare(a15, "1790709992", v11);
    }
    static #toString(a18, a19) {
        return C3;
    }
}
new C13();
/(?:a?)?/is;
const v23 = Symbol.iterator;
const v32 = {
    [v23]() {
        let v25 = 10;
        const v31 = {
            next() {
                v25--;
                const v29 = v25 == 0;
                return { done: v29, value: v25 };
            },
        };
        return v31;
    },
};
const v33 = [-2.0,-5.0,3.0,-8.523435358204644];
const v37 = Symbol.iterator;
const v52 = {
    [v37]() {
        let v39 = 10;
        const v51 = {
            next() {
                v39--;
                const v43 = v39 == 0;
                const v50 = {
                    done: v43,
                    set b(a45) {
                        const t0 = Intl.ListFormat;
                        new t0("ko_KR");
                    },
                    value: v39,
                };
                return v50;
            },
        };
        return v51;
    },
};
const v53 = /pfoo(?!bar)baza?/imuy;
v53.dotAll = v53;
class C55 {
    static o(a57, a58, a59) {
        [] = v52;
        return a57;
    }
    static {
    }
}
try { new C55(); } catch (e) {}
new C55();
const v63 = new C55();
try { v63.propertyIsEnumerable(C55); } catch (e) {}
const v65 = new C55();
const v67 = Symbol.iterator;
const v69 = v67.description;
Symbol.for(v69);
const v95 = {
    [v67]() {
        let v72 = 10;
        const v94 = {
            next() {
                v72--;
                const v76 = v72 == 0;
                const v93 = {
                    done: v76,
                    value: v72,
                    [v72](a78, a79, a80, a81) {
                        const v82 = async (a83, a84, a85, a86) => {
                            const v88 = Symbol.asyncDispose;
                            const v90 = {
                                value: v9,
                                [v88]() {
                                    return this;
                                },
                            };
                            await using v91 = v90;
                            await v69;
                            return v90;
                        };
                        return v9;
                    },
                };
                return v93;
            },
        };
        return v94;
    },
};
const v96 = [false,v33,v63,v65];
try { v96.flat(); } catch (e) {}
function f98() {
    return f98;
}
class C99 extends f98 {
}
function f100() {
    return C99;
}
class C101 {
    static {
        let v102 = this;
        function f103(a104, a105, a106) {
            a105.g = a105;
            a106 ?? a106;
            this ?? this;
            function f110(a111) {
                return a105;
            }
            for (let v112 = 0; v112 < 5; v112++) {
                Object.defineProperty(a105, this, { set: f110 });
            }
            [f100,v102,f100] = a105;
            return f100;
        }
        try { f103(C99, f103); } catch (e) {}
        new Worker(f103, { type: "function" });
    }
}
try { gc.toString(); } catch (e) {}
gc();
v11 > v33;
function f123(a124, a125) {
    v10 instanceof C13;
}
new Promise(f123);
function f129() {
    return v32;
}
let v130 = -536870912;
function f131(a132) {
    v130++;
    return v130;
}
new Worker(f131, { type: "function" });
