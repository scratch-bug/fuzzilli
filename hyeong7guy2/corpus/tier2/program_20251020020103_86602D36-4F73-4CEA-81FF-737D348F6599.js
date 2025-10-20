function f0() {
}
class C2 {
    static p(a4) {
        const v5 = {
            apply: f0,
            defineProperty: f0,
            deleteProperty: f0,
            getOwnPropertyDescriptor: f0,
            getPrototypeOf: f0,
            has: f0,
            ownKeys: f0,
        };
        new Proxy(this, v5);
        const v9 = new Uint8Array();
        return v9.values();
    }
}
new C2();
new C2();
const v13 = new C2();
const v14 = new C2();
const v16 = Symbol.iterator;
const v25 = {
    [v16]() {
        let v18 = 10;
        const v24 = {
            next() {
                v18--;
                const v22 = v18 == 0;
                return { done: v22, value: v18 };
            },
        };
        return v24;
    },
};
const v26 = [v25,v25,C2,f0,C2];
new Uint16Array(5);
new Uint8ClampedArray();
new Uint8Array();
function F38(a40, a41, a42) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a42;
    this.g = a41;
}
new F38(16, 16);
new F38(128, 16, 128);
function F45(a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    function f49() {
        function f50(a51) {
            new BigUint64Array(1073741825);
            new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
            WebAssembly.Module;
            function f93() {
            }
            const v94 = {};
            const v95 = { m: v94 };
            WebAssembly.Instance;
            function f97(a98, a99) {
                const v102 = {
                    get e() {
                        for (const v101 in this) {
                        }
                    },
                };
                return v102;
            }
            f97(4, this);
            f97(1, a51);
            f97(0, a51);
            const v106 = f97(2, a51);
            f97(8, v13);
            const v108 = f97(97, v14);
            const v128 = %WasmStruct();
            for (const v129 of v26) {
                async function* f130(a131, a132, a133, a134) {
                    yield f49;
                    return BigUint64Array;
                }
                try { f130(v106, f50, v108, v128); } catch (e) {}
            }
            [0,97,115,109,1,0,0,0,1,6,1,96,1,110,1,110,2,7,1,1,109,1,102,0,0];
        }
        f50();
        return f50;
    }
    Object.defineProperty(this, "toString", { get: f49 });
}
const v147 = new F45(F45, F45);
v147.toString(F45, v147, F45, v147);
