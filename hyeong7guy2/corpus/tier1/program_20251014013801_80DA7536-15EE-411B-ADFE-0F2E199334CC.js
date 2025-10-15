[536870889,536870889,536870889,536870889];
class C2 {
    #o(a4, a5) {
        for (let v6 = 0; v6 < 81; v6++) {
            const v7 = [-40357,-1073741824,-4294967295,268435440];
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v12 = new F8(v7);
            new F8(v12, v12);
            [-1.5978646361780662e+308,2.220446049250313e-16,0.0,-1000000.0,1000000000000.0,-361145.4113382548,0.7352302904470598,3.0,5.270314079823727];
            [257,-18372,-256,-9223372036854775807];
            const v16 = class {
                get a() {
                    return this;
                }
                set h(a19) {
                }
            }
            new v16();
            new v16();
            new Float64Array(1567);
            function f26(a27) {
                return a27;
            }
            const v31 = class extends BigUint64Array {
                toString(a33, a34) {
                    try { new Int32Array(); } catch (e) {}
                    0 < 3;
                    return a33;
                }
            }
            const v41 = new Uint8ClampedArray(262);
            function F42(a44) {
                if (!new.target) { throw 'must be called with new'; }
                function vuln() {
                    let x = 1;
                    new this();
                    let z = 3;
                    const v51 = x + z;
                    const v52 = [];
                    class C55 extends Date {
                    }
                    const v56 = new C55();
                    v56.setDate(664791.7766177675);
                    v52[0];
                    Symbol.description;
                    return v51;
                }
            }
            const v61 = new F42();
            new F42();
            const v63 = new F42();
            function f64() {
            }
            function f66() {
                return 0;
            }
            const v67 = { b: Uint8ClampedArray };
            0 in v67;
            class C69 {
            }
            if (C69) {
                let y = 1;
                const t64 = v16?.[y];
                delete t64?.a;
            }
            /a\fb\nc\rd\te\vf/mugsyd;
            const v76 = {};
            function F77() {
                if (!new.target) { throw 'must be called with new'; }
                this.c = 49853;
                this.f = 49853;
                function f80(a81, a82) {
                    class C84 {
                        static m(a86) {
                            return a86 >>>= this;
                        }
                        static #p(a88) {
                            return this;
                        }
                    }
                    const v89 = new C84();
                    const v92 = [232656985,20082,-14,1141014574,268435440,1,1,257,268435456];
                    const v94 = Symbol.iterator;
                    const v96 = new f64();
                    const v97 = class extends Int16Array {
                        p(a99, a100, a101, a102) {
                            let v103 = 0;
                            do {
                                const v106 = 268435456 ?? 127;
                                const v107 = 127 / 127;
                                v107 - (v107 || v106);
                                v103++;
                            } while ((() => {
                                    const v112 = v89 < 7;
                                    function f113() {
                                        return v92;
                                    }
                                    function f114() {
                                        return { __proto__: f113 };
                                    }
                                    const t7 = ({}).next;
                                    t7();
                                    return v112;
                                })())
                            return Int16Array;
                        }
                    }
                    const v119 = new v97();
                    const v120 = class {
                        static #p(a122) {
                            try { v97["equals"]("4", "4", v119, -1886296164n); } catch (e) {}
                            v94[4] = v96;
                            Uint8ClampedArray ??= Uint8ClampedArray;
                            Math.atan2(a122, a122);
                            ~a122;
                        }
                    }
                    const v128 = new v120();
                    v128.g = v128;
                    function F129(a131, a132) {
                        if (!new.target) { throw 'must be called with new'; }
                        a132 ?? a132;
                    }
                    new F129(v128);
                    const v135 = {};
                    return a81;
                }
                const v137 = {};
                const v138 = {};
            }
            const v139 = new F77();
            f64();
            function f141(a142, a143, a144, a145) {
            }
            f141(v139, v63, v67, v61);
            class C149 {
                static get h() {
                }
                [Map](a152, a153, a154, a155) {
                }
            }
            const v168 = {
                [Symbol]() {
                    let v160 = 10;
                    const v166 = {
                        next() {
                            v160--;
                            const v164 = v160 == 0;
                            const v165 = { done: v164, value: v160 };
                        },
                    };
                    return v166;
                },
                get c() {
                },
            };
            class C170 {
                [Map](a172, a173, a174, a175) {
                }
            }
            function f176(a177, a178) {
                a177.toISOString = a178;
            }
            for (let i180 = 0; i180 < 20000; i180++) {
                const v187 = { a: 1 };
                const v190 = i180 % 2 ? v187 : v41;
                f176(v190, {}, 0, C170, C149);
            }
            Object.create(v168);
            function f195(a196, a197) {
                a196.toISOString = a197;
            }
            for (let i199 = 0; i199 < 20000; i199++) {
                const v206 = {};
                i199 % 2;
                const v209 = {};
                0 < 5;
                function f213(a214) {
                    if (a214) {
                        const v216 = { p1: 1.1 };
                    }
                    const v217 = {};
                    return {};
                }
                f213();
                f195(v206, v209, 0, C149, C149);
            }
            let victim = { a: 1.1 };
            f195(victim, {});
            break;
        }
        return a4;
    }
}
new C2();
new C2();
new C2();
const v230 = Symbol.iterator;
const v239 = {
    [v230]() {
        let v232 = 10;
        const v238 = {
            next() {
                v232--;
                const v236 = v232 == 0;
                return { done: v236, value: v232 };
            },
        };
        return v238;
    },
};
const v241 = Symbol.iterator;
const v250 = {
    [v241]() {
        let v243 = 10;
        const v249 = {
            next() {
                v243--;
                const v247 = v243 == 0;
                return { done: v247, value: v243 };
            },
        };
        return v249;
    },
};
function f252() {
    return 536870889;
}
const v255 = class extends Uint8ClampedArray {
}
const v263 = {
    construct(a257, a258) {
        const v260 = Date.setUTCHours;
        try { v260.call(); } catch (e) {}
        return {};
    },
};
v263.construct(v255, v255);
function f266() {
}
const v267 = new Proxy(f266, v263);
for (let v268 = 0; v268 < 50; v268++) {
    Reflect.construct(v267, []);
}
