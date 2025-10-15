const v0 = [0.8074900974306956,NaN];
class C1 {
    static n() {
        this[2] = v0;
        return v0;
    }
    c = v0;
}
const v3 = new C1();
new C1();
new C1();
new Int16Array(1);
const v11 = Symbol.iterator;
const v20 = {
    [v11]() {
        let v13 = 10;
        const v19 = {
            next() {
                v13--;
                const v17 = v13 == 0;
                return { done: v17, value: v13 };
            },
        };
        return v19;
    },
};
function f21() {
    return v20;
}
const v22 = class {
    static {
        try {
            super.setInt16(v3, this, v3);
        } catch(e25) {
            for (let v26 = 0; v26 < 100; v26++) {
                var h = v26;
            }
        }
    }
}
new v22();
new v22();
new v22();
new v22();
const v42 = {
    construct(a38, a39) {
        const t0 = a39[0];
        t0[0] = 1.1;
        return a38;
    },
};
function f44() {
}
const v45 = new Proxy(f44, v42);
for (let i47 = 0; i47 < 25000; i47++) {
    Reflect.construct(v45, [[]]);
}
[];
const v61 = %WasmArray();
class C66 {
    static ["f"](a68, a69, a70) {
        for (let i73 = 0, i74 = 10; i74;) {
            /((?:a*)+a$)/ivgsy;
        }
    }
}
try { C66.call(); } catch (e) {}
const v81 = {};
Symbol.for();
Symbol.asyncDispose = Symbol;
function f84() {
    return f84;
}
for (let v85 = 0; v85 < 100; v85++) {
    v85 & v85;
    const v87 = {};
    class C88 {
    }
    class C89 {
    }
    C89.d = C89;
    const v92 = {
        [Symbol]() {
            v85 = this;
        },
    };
}
class C95 extends Int32Array {
}
class C97 extends WeakSet {
}
function f98() {
}
class C99 {
}
const v100 = {};
const v101 = `-63824${C99}512`;
try { v101.blink(); } catch (e) {}
