try {
    const v0 = [405.3413734457015,-343723.5902069813,571.6049563146685];
    [2147483647,1000,9007199254740990,1653661248,9223372036854775807];
    try { new Int8Array(1169); } catch (e) {}
    const v5 = [-2.0,-1.7976931348623157e+308,-2.0,5.722869831412504,2.0];
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
    }
    try { new F6(v5, v0); } catch (e) {}
    try { new BigInt64Array(); } catch (e) {}
    function F14(a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
    }
    try { new F14(); } catch (e) {}
    try { new BigUint64Array(1073741825); } catch (e) {}
    const v23 = class {
    }
    try { new v23(); } catch (e) {}
    try { new v23(); } catch (e) {}
    const v26 = class {
    }
    function f27(a28) {
        try { a28(); } catch (e) {}
        return a28;
    }
    const v64 = [0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0];
    let v65;
    try { v65 = new Uint8Array(v64); } catch (e) {}
    const v67 = WebAssembly?.Module;
    let v68;
    try { v68 = new v67(v65); } catch (e) {}
    function f69() {
    }
    const v72 = { f: f69, execution: "async" };
    try { gc(v72); } catch (e) {}
    function f74() {
        return 1;
    }
    const v75 = { f: f74 };
    const v76 = { m: v75 };
    const v77 = WebAssembly?.Instance;
    let v78;
    try { v78 = new v77(v68, v76); } catch (e) {}
    const v80 = v78?.exports?.main;
    for (let i82 = 0;
        (() => {
            const v84 = {};
            try { v84.defineProperty = Symbol; } catch (e) {}
            return i82 < 20000;
        })();
        i82++) {
        try { f27(v80); } catch (e) {}
    }
    try { new v26(); } catch (e) {}
    [4096];
    const v93 = {};
    try { v93.defineProperty = v26; } catch (e) {}
    function f94() {
        return v93;
    }
    try { Reflect.construct(f94); } catch (e) {}
} catch(e97) {
}
