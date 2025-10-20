const v2 = new Float32Array(0);
let v3 = 80;
new Int8Array(v3);
const v7 = new WeakSet();
const v10 = [Int8Array,v2,v7,[-543596.0124198128,0.5022858140163464,-1000000000000.0,0.3639295001777594,798.4892956346366,898819.6370575055,0.05572997664229484]];
const v12 = Symbol.iterator;
const v23 = {
    [Symbol]() {
        function f14() {
            return f14;
        }
        v3 = this;
    },
    [v12]() {
        let v16 = 10;
        const v22 = {
            next() {
                v16--;
                const v20 = v16 == 0;
                return { done: v20, value: v16 };
            },
        };
        return v22;
    },
};
const v25 = Array();
v25[2] = v10;
const t27 = "🙌🏿";
t27[2] = "🙌🏿";
class C28 {
    static get e() {
        return this;
    }
    static [v10](a32, a33) {
        function f34(a35, a36) {
            for (let i38 = 0;
                i38 < 10000;
                (() => {
                    const v42 = a35 === "0ml";
                    [v42,v42];
                    i38++;
                })()) {
            }
            return f34;
        }
        return 0;
    }
}
new C28();
const v48 = { a: 1 };
const v49 = Symbol.iterator;
const v58 = {
    [v49]() {
        let v51 = 10;
        const v57 = {
            next() {
                v51--;
                const v55 = v51 == 0;
                return { done: v55, value: v51 };
            },
        };
        return v57;
    },
};
v58.h = v58;
new C28();
new C28();
new C28();
function F62(a64, a65) {
    if (!new.target) { throw 'must be called with new'; }
    function f66() {
        function f67(a68) {
            const v69 = v25.constructor;
            const v70 = v69(v69, f66);
            let v71 = v70.length;
            v71 * v71;
            let v73;
            try { v73 = v70.forEach(); } catch (e) {}
            function f74() {
                v71 >>>= v70;
                function f75(a76) {
                    return a76;
                }
                return f75(v73);
            }
            return f66;
        }
        %OptimizeMaglevOnNextCall(f67);
        return f67;
    }
    Object.defineProperty(this, "toString", { get: f66 });
}
const v78 = new F62();
v78.toString();
const v80 = /\xf0\x9f\x92\xa9/dsygmvi;
function f82() {
    return -1n;
}
%PrepareFunctionForOptimization(f82);
%OptimizeMaglevOnNextCall(f82);
f82();
gc();
("🙌🏿").match(v80);
function F87(a89, a90) {
    if (!new.target) { throw 'must be called with new'; }
    function f91() {
        function f92(a93) {
            f92[4] | 7;
            const v98 = { a: 1.1 };
            const v99 = this.a;
            const v101 = 9 << 9;
            let v102 = v101 / v101;
            v102--;
            v99 | v98;
            return v102;
        }
        %OptimizeMaglevOnNextCall(f92);
        return f92;
    }
    Object.defineProperty(this, "toString", { get: f91 });
}
