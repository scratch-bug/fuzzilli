const v1 = /4(?:(?=a))a\1?/syi;
function f3() {
    return v1;
}
const v5 = Symbol.iterator;
const v14 = {
    [v5]() {
        let v7 = 10;
        const v13 = {
            next() {
                v7--;
                const v11 = v7 == 0;
                return { done: v11, value: v7 };
            },
        };
        return v13;
    },
};
class C15 extends f3 {
    o(a17, a18) {
        try {
            this.test("h");
        } catch(e20) {
        }
        return a18;
    }
}
new C15();
new C15();
new Int16Array();
class C29 {
    static set b(a31) {
        [];
    }
    static set g(a34) {
    }
}
C29.name;
try { new C29(); } catch (e) {}
function f37() {
    return f37;
}
function f38(a39, a40, a41) {
    const v42 = a41 | a41;
    const v48 = {
        construct(a44, a45) {
            ~a45;
            try { a44.construct(a39, f37); } catch (e) {}
            return v42;
        },
    };
    v48.construct(v48);
    return f38;
}
const t54 = f38();
t54();
%OptimizeMaglevOnNextCall(f38);
f38();
const v53 = C29?.constructor;
try { new v53(); } catch (e) {}
function F56(a58, a59, a60) {
    if (!new.target) { throw 'must be called with new'; }
    try { a58.constructor(); } catch (e) {}
    try { new a59(); } catch (e) {}
    this.c = a60;
    this.f = -2.212553402179351;
}
new F56();
function f64() {
    const v65 = %WasmStruct();
    const v66 = %WasmArray();
}
try { f64.call(); } catch (e) {}
try { new Worker(); } catch (e) {}
const t74 = "function";
t74[1] = "function";
new Worker(f64, { type: "function" });
for (let i74 = 0;
    (() => {
        const v78 = {
            o(a76, a77) {
            },
        };
        return i74 < 20000;
    })();
    ++i74) {
}
