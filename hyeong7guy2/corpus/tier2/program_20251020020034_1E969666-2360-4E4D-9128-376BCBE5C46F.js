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
const v12 = new C2();
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
    this.g = a41;
}
new F38(16, 16);
new F38(128, 16, 128);
function F45(a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    function f49() {
        function f50(a51) {
            new BigUint64Array(1073741825);
            const v90 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
            const t52 = WebAssembly.Module;
            const v93 = new t52(v90);
            function f94() {
                return 0;
            }
            const v95 = { f: f94 };
            const v96 = { m: v95 };
            const t59 = WebAssembly.Instance;
            const v98 = new t59(v93, v96);
            function f99(a100, a101) {
                const v105 = {
                    get e() {
                        for (const v103 in this) {
                        }
                        return Object;
                    },
                };
                return v105;
            }
            f99(4, this);
            f99(7, v12);
            f99(0, a51);
            f99(1, a51);
            f99(0, a51);
            f99(0, v14);
            const v112 = f99(2, a51);
            f99(8, v13);
            const v114 = f99(97, v14);
            f99(1, v12);
            let v130 = 110;
            v130--;
            const v136 = %WasmStruct();
            for (const v137 of v26) {
                async function* f138(a139, a140, a141, a142) {
                    await a142;
                    yield f49;
                    return BigUint64Array;
                }
                try { f138(v112, f50, v114, v136); } catch (e) {}
            }
            const v154 = new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,v130,1,110,2,7,1,1,109,1,102,0,0]);
            const t93 = WebAssembly.Module;
            new t93(v154);
            v98.exports.main;
        }
        f50();
        return f50;
    }
    Object.defineProperty(this, "toString", { get: f49 });
}
const v161 = new F45(F45, F45);
v161.toString(F45, v161, F45, v161);
