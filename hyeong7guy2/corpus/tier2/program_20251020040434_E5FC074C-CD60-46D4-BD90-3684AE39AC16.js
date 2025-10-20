const v1 = Symbol.iterator;
const v10 = {
    [v1]() {
        let v3 = 10;
        const v9 = {
            next() {
                v3--;
                const v7 = v3 == 0;
                return { done: v7, value: v3 };
            },
        };
        return v9;
    },
};
const v13 = new Int8Array(1);
function f14() {
    return v13;
}
class C15 {
    static {
        const t20 = {};
        t20.b = this;
        const v18 = {};
        v18.b = this;
        v18.d = 1;
        const v19 = {};
        v19.b = this;
        v19.d = 1;
        v19.g = Int8Array;
        const v20 = {};
        v20.b = this;
        v20.d = 1;
        v20.f = this;
    }
}
new C15();
new C15();
new C15();
("keys").normalize("NFKD");
const v31 = ~(-(~Symbol));
Math.atan2(v31, -2147483648);
-v31;
-2147483648 << v31;
Math.fround(-2147483648);
function F36(a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    a38.prototype = a38;
    a39--;
}
function f42() {
    return f42;
}
function F44(a46, a47, a48, a49) {
    if (!new.target) { throw 'must be called with new'; }
    new Float64Array(1073741824);
    function F52(a54, a55) {
        if (!new.target) { throw 'must be called with new'; }
        function f56() {
            function f57(a58) {
                function F59(a61, a62, a63, a64) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                try { F59.call(); } catch (e) {}
                -9007199254740990 >> a54;
            }
            f57();
            f57();
            %OptimizeMaglevOnNextCall(f57);
            return f57;
        }
        Object.defineProperty(this, "toString", { get: f56 });
    }
    const v70 = new F52();
    class C71 {
        static [v70](a73, a74, a75) {
        }
    }
    for (let i77 = 0;
        (() => {
            const v80 = (20000).constructor.isSafeInteger(i77);
            function f81(a82, a83, a84) {
                class C85 {
                }
                C85.h = v80;
            }
            return i77 < 20000;
        })();
        ++i77) {
    }
}
new F44();
