try {
    new Uint32Array(2113);
    WeakSet.name = WeakSet;
    const v5 = new WeakSet();
    const v6 = v5.delete(-5.0);
    const v9 = Symbol.asyncIterator;
    const v10 = Symbol.iterator;
    const v19 = {
        [v10]() {
            let v12 = 10;
            const v18 = {
                next() {
                    v12--;
                    const v16 = v12 == 0;
                    return { done: v16, value: v12 };
                },
            };
            return v18;
        },
    };
    v19.h = v19;
    function f20() {
        let v21 = /(?:ab)/uym;
        v21 >>= v21;
        const v24 = { maxByteLength: 14 };
        let v26;
        try { v26 = new SharedArrayBuffer(14, v24); } catch (e) {}
        try { new DataView(v26); } catch (e) {}
    }
    6 - 6;
    const v32 = new Float64Array();
    v32[0] = v32;
    const v34 = Symbol.iterator;
    const v36 = v34.description;
    const v37 = Symbol.for(v36);
    const v38 = { apply: Symbol, ownKeys: Symbol, setPrototypeOf: Symbol };
    Proxy.g = Proxy;
    const v40 = new Proxy(Symbol, v38);
    v40.a = v40;
    const v66 = {
        [v34]() {
            const v65 = {
                next() {
                    function f44(a45, a46, a47) {
                        const v58 = {
                            m(a49, a50, a51) {
                                a45?.__proto__;
                            },
                            [v19](a55, a56, a57) {
                            },
                        };
                    }
                    try { f44(v37, v37, 2113); } catch (e) {}
                    try { f44(v9, v6, v6); } catch (e) {}
                    try { f44(v9, v9, 6); } catch (e) {}
                    try { f44(v9, v9); } catch (e) {}
                    const v64 = { value: 10 };
                },
            };
        },
    };
    const v69 = new Uint8Array(11);
    v69.g = v69;
    class C70 {
    }
    let v73;
    try { v73 = Symbol.keyFor(v66); } catch (e) {}
    v73 ?? v73;
    Symbol.iterator;
    const v76 = {};
    const v77 = C70.__defineGetter__;
    let v78;
    try { v78 = new v77(); } catch (e) {}
    v78 ?? v78;
    new C70();
    const v81 = new C70();
    const v82 = v81.__lookupGetter__;
    v82.length = v82;
    function f83(a84) {
        let v85 = undefined;
        if (a84) {
            v85 = { p1: 1.1 };
        }
        const v88 = {};
        const v89 = { q1: v88 };
        if (a84) {
            ~v85.p1;
        }
    }
    for (let i94 = (() => {
            let v92 = 0;
            v92--;
            return v92;
        })();
        (() => {
            const v96 = i94 < 20000;
            v96 || v96;
            return v96;
        })();
        i94++) {
        const v101 = f83();
        const v102 = v101 ?? v101;
        v102 ?? v102;
    }
    f83(true);
    for (let [v106,,v107] of v36) {
        continue;
    }
    async function f108(a109, a110, a111) {
        return await f108;
    }
    f108(-6, Symbol, -6);
} catch(e114) {
}
