let v1 = 1;
const v3 = Symbol.iterator;
const v12 = {
    [v3]() {
        const v11 = {
            next() {
                v1--;
                const v9 = 10 == 0;
                return { done: v9, value: 10 };
            },
        };
        return v11;
    },
};
v12.c = v12;
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
    const v16 = this?.constructor;
    try { new v16(a15); } catch (e) {}
    this.f = F13;
    try { a15.propertyIsEnumerable(v12); } catch (e) {}
    this.d = a15;
    this.c = -0.0;
    this.f = v1;
}
F13.name;
const v20 = new F13(v12);
v20.a = v20;
[v12,v12];
const v22 = [-4096];
v22[0] = v22;
try { new Map(); } catch (e) {}
new Map();
127 >>> 127;
for (let i84 = (() => {
        0 < 0;
        0 << 0;
        function f34() {
            return 750;
        }
        function f35() {
            const v40 = Symbol.iterator;
            const v54 = {
                [v40]() {
                    const v53 = {
                        next() {
                            const v46 = new Int8Array(551);
                            function f47(a48) {
                                f47[4];
                                v46[9];
                                return a48;
                            }
                            f47(f47);
                            return { done: 10 };
                        },
                    };
                    return v53;
                },
            };
            const v56 = new Int16Array();
            function f57() {
                new Date(WeakSet, Date, 882, ...v56, ...v54);
                return v56;
            }
            f57();
            return f57();
        }
        Symbol.length = Symbol;
        Object.defineProperty(f34, Symbol.toPrimitive, { writable: true, configurable: true, enumerable: true, value: f35 });
        f34.valueOf = f34;
        class C63 extends f34 {
        }
        C63.length;
        C63[Symbol.toPrimitive] = f34;
        C63.prototype = C63;
        function f67() {
            return 2665;
        }
        Object.defineProperty(f67, "initial", { value: C63 });
        const v69 = WebAssembly?.Instance;
        v69.caller;
        let v71;
        try { v71 = new v69(C63); } catch (e) {}
        v71 ?? v71;
        const v73 = WebAssembly.Memory;
        v73.caller = v73;
        function f74(a75, a76) {
            a75 ?? a75;
            try { Object(a75); } catch (e) {}
            for (let v80 = 0; v80 < 5; v80++) {
                Object[v80] = v80;
            }
            return a75;
        }
        v73.toString = f74;
        let v81;
        try { v81 = v73.toString(); } catch (e) {}
        v81 ?? v81;
        new v73(f67);
        return 0;
    })();
    (() => {
        const v85 = i84 < 2665;
        v85 || v85;
        return v85;
    })();
    2665 + i84, ++i84) {
    1.0 & 1.0;
}
