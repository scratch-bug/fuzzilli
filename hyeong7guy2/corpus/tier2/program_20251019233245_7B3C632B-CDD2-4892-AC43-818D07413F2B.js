const v1 = new Set();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(this, "g", { value: a5 });
    this.b = Set;
    this.g = a4;
}
const v6 = new F2(F2, v1);
const v7 = new F2(v6, F2);
function f12() {
    return "fromCharCode";
}
try {
    new Set(v7);
} catch(e15) {
}
%PretenureAllocationSite(v7);
const v16 = [10000,v7];
function F17(a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = this;
    this.g = a19;
    this.g = a21;
}
const v22 = new F17(16, 7n, Set);
new F17("fromCharCode", v22, v22);
new F17("fromCharCode", v6, v22);
function F25(a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    function f29() {
        function f30(a31) {
            try { this.toSorted(F25); } catch (e) {}
            function F33(a35, a36) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = f30;
            }
            new F33(f30, v6);
            new F33(f29, v22);
            new F33(v16, a27);
            new BigUint64Array(1073741825);
            for (let v71 = 0; v71 < 50; v71++) {
                v71++;
            }
            const v81 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
            const t44 = WebAssembly.Module;
            const v84 = new t44(v81);
            function f85() {
            }
            const v86 = { f: f85 };
            const v87 = { m: v86 };
            const t50 = WebAssembly.Instance;
            const v89 = new t50(v84, v87);
            const v90 = v89.exports;
            +a28;
            function f92(a93, a94) {
                function f96(a97) {
                    Math.ceil(9223372036854775807);
                    let v104 = 848.8198255918026 & 848.8198255918026;
                    ++v104;
                    +v104;
                }
                this.onmessage = f96;
                const v107 = class extends f29 {
                    static [110](a109, a110) {
                        [0,1,7,1];
                        return 97;
                    }
                    b = f85;
                }
                new v107();
                new v107();
            }
            const v116 = [f85,2];
            new Worker(f92, { arguments: v116, type: "function" });
            v90.main;
        }
        return f30;
    }
    Object.defineProperty(this, "toString", { get: f29 });
}
const v120 = new F25(F25, F25);
v120.toString();
