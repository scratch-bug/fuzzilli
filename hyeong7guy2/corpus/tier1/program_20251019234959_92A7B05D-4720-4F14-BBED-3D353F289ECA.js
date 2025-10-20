const v1 = /[\cz]/usy;
[v1,v1,v1,true];
const v4 = Symbol.iterator;
const v13 = {
    [v4]() {
        let v6 = 10;
        const v12 = {
            next() {
                v6--;
                const v10 = v6 == 0;
                return { done: v10, value: v6 };
            },
        };
        return v12;
    },
};
[v1,v13,v13];
new Uint32Array(129);
new Uint32Array(1);
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    function f25() {
        function f26(a27) {
            new BigUint64Array(1073741825);
            const v66 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
            const t25 = WebAssembly.Module;
            const v69 = new t25(v66);
            function f70() {
                return 0;
            }
            const v71 = { f: f70 };
            const v72 = { m: v71 };
            const t32 = WebAssembly.Instance;
            const v74 = new t32(v69, v72);
            const v75 = v74.exports;
            const t35 = v75.main;
            t35();
            return v75;
        }
        f26();
        f26();
        %OptimizeMaglevOnNextCall(f26);
        return f26;
    }
    Object.defineProperty(this, "toString", { get: f25 });
}
const v80 = new F21(F21, F21);
v80.toString(F21, v80, F21, v80);
