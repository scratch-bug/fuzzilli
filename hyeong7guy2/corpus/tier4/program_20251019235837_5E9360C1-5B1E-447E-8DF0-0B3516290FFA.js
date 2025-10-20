BigInt64Array.prototype = BigInt64Array;
const v4 = new BigInt64Array(5);
function f5() {
    return v4;
}
f5.name;
f5.d = f5;
const v7 = class extends f5 {
    p(a9, a10) {
        this[10] = a9;
        return f5;
    }
    get e() {
        return this;
    }
}
const v12 = new v7();
v12[1];
let v14;
try { v14 = v12.join(f5); } catch (e) {}
try { v14.split(10, BigInt64Array); } catch (e) {}
const v17 = new Int8Array(10);
class C18 {
    set e(a20) {
    }
    static {
    }
    static get f() {
        return v4;
    }
    static {
        try {
            super.subarray(this, -0.1650787650858767, Int8Array, this, v17);
        } catch(e25) {
            const v26 = e25?.constructor;
            try { new v26(v4); } catch (e) {}
        }
    }
}
C18.length;
new C18();
new C18();
const v32 = gc();
function f33() {
    return v32;
}
f33.caller = f33;
try { new Float64Array(v17, v7, v7); } catch (e) {}
const v37 = new Float64Array(9);
function f38() {
    const v40 = { overflow: "reject" };
    function f42() {
        return 750;
    }
    f42.valueOf = f42;
    return v37;
}
class C43 {
    static set d(a45) {
        class C46 {
            static [-0.1650787650858767](a48, a49, a50, a51) {
                try { this.__proto__ = this; } catch (e) {}
                function F52(a54, a55) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f56() {
                        function f57(a58) {
                            const v60 = new Int16Array(C18, a54, a58);
                            const v61 = v60.length;
                            const v64 = {
                                __proto__: a48,
                                set g(a63) {
                                },
                                millisecond: v61,
                            };
                            return a54;
                        }
                        f57(f57);
                        f57(a54);
                        %OptimizeMaglevOnNextCall(f57);
                        return f57;
                    }
                    Object.defineProperty(this, "toString", { get: f56 });
                }
                const v67 = new F52();
                class C68 {
                    static [v67](a70, a71, a72) {
                    }
                }
                return a50;
            }
            constructor(a74, a75) {
                function f76(a77, a78) {
                    const v79 = a78 | a78;
                    function F81(a83, a84) {
                        if (!new.target) { throw 'must be called with new'; }
                        a83.prototype = a83;
                        function f85(a86, a87, a88) {
                            a87[1];
                            return v79;
                        }
                        f85(arguments, f85);
                        f85(a78, arguments);
                    }
                    const v92 = new F81(F81, v79);
                    return v92;
                }
                f76.prototype = f76;
                f76();
                %PrepareFunctionForOptimization(f76);
                %OptimizeMaglevOnNextCall(f76);
                f76(C18, a74);
            }
            [a45] = Int8Array;
        }
        new C46();
        new C46();
    }
}
const v97 = C43?.apply;
try { new v97(v32, gc); } catch (e) {}
const v99 = new C43();
try { v99.constructor(); } catch (e) {}
function f102() {
    const v103 = {};
}
class C104 {
}
function f105(a106) {
}
const v109 = Array();
v109[104] = 694.5967847510485;
function F110(a112, a113, a114) {
    if (!new.target) { throw 'must be called with new'; }
    const v115 = this?.constructor;
    try { new v115(BigUint64Array, a114, a112); } catch (e) {}
    v109["shift"]();
}
new F110();
