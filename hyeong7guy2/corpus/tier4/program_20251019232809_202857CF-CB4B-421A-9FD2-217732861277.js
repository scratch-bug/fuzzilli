const v0 = [-7,1004201416,6,11,255];
const v1 = [8,-1428631863,86605421];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this?.constructor;
    try { new v6(v0, a4); } catch (e) {}
    this.h = a5;
    this.a = v1;
}
const v8 = new F2(v0, F2);
const v9 = v8?.constructor;
try { new v9(F2, v1); } catch (e) {}
function f11() {
    return v0;
}
const v12 = class {
    [v8](a14) {
        function f15(a16, a17, a18) {
        }
        new Promise(f15);
        return this;
    }
}
new v12();
const v22 = new v12();
const v23 = v22?.propertyIsEnumerable;
try { new v23(v0); } catch (e) {}
const v25 = class extends F2 {
    get c() {
        const v27 = class extends F2 {
            static [v8](a29, a30, a31) {
                let v32 = 0;
                do {
                    (v22 << 512) | (a29 << a29);
                    class C38 {
                        static toString(a40, a41, a42, a43) {
                            async function* f44(a45, a46) {
                                const v48 = Symbol.asyncDispose;
                                const v50 = {
                                    value: this,
                                    [v48]() {
                                        return f11;
                                    },
                                };
                                await using v51 = v50;
                                const v52 = /(?:a+)?/ygi;
                                const v53 = await v32;
                                const v55 = Intl.PluralRules;
                                try {
                                    const v57 = {};
                                    Object.defineProperty(v57, "maximumSignificantDigits", { configurable: true, enumerable: true, get: v12 });
                                    new v55("so", v57);
                                } catch(e59) {
                                }
                                yield* [v53,v53,v1,v32,v52];
                                return this;
                            }
                            f44(a30, this);
                            return 512;
                        }
                    }
                    new C38();
                    new C38();
                    new C38();
                    v32++;
                } while ((() => {
                        const v67 = v32 < 2;
                        function* f68(a69, a70) {
                            function f71(a72, a73, a74, a75) {
                                return a69;
                            }
                            f71(this, this, v67, v25);
                            yield a70;
                            return F2;
                        }
                        f68(v25, v12);
                        return v67;
                    })())
                return v1;
            }
        }
        new v27();
        new v27();
        return this;
    }
}
try { v25(); } catch (e) {}
const v83 = new v25();
class C85 extends v25 {
    static #o(a87, a88, a89, a90) {
        a90[8] = a90;
        return v12;
    }
    static set d(a92) {
    }
}
const v93 = new C85();
v93.c;
const v96 = new WeakMap();
function f98(a99, a100) {
    -a99;
    [v96,WeakMap,v83,210854392,C85];
    async function f103(a104, a105) {
    }
}
try { f98(22724n, f98); } catch (e) {}
