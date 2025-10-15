function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -8;
    this.c = -8;
    this.a = -8;
}
new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = v5?.constructor;
try { new v6(); } catch (e) {}
-3;
const v10 = class extends F0 {
    get e() {
        const v12 = new F0();
        return v12;
    }
    static a = F0;
}
const v13 = new v10();
new v10();
const v15 = new v10();
try { ("function").substring(v15, F0); } catch (e) {}
const v23 = new Uint32Array(16);
v23[10] = v23;
const v25 = [2147483648,-23464,65537,27588];
try { v25.slice(v13, F0); } catch (e) {}
new Float32Array(12);
const v34 = [65535,-6,-1965,536870889,3,11,-268435456,1024,-7,-9007199254740992];
try { v34.fill(v34); } catch (e) {}
function f37() {
    return 13;
}
let v39 = 1;
v39++;
const v42 = new BigInt64Array(13);
try { v42.join(v23); } catch (e) {}
const v47 = Symbol.iterator;
function F48(a50, a51) {
    if (!new.target) { throw 'must be called with new'; }
    a50 ?? a50;
    this.e = "match";
}
new F48();
function f55() {
}
[f55,f55,f55,f55];
function F57(a59, a60) {
    if (!new.target) { throw 'must be called with new'; }
    const v61 = this?.constructor;
    try { new v61(Date, a60); } catch (e) {}
}
const v63 = new F57(f55, v25);
v63.b = v63;
const v64 = new F57(f55, v63);
v64.length = v64;
const v65 = new F57(v64, f55);
v65.length = 1;
const v70 = Float64Array[1];
v70 ?? v70;
const v72 = class {
}
try { v72(); } catch (e) {}
let v75;
try { v75 = v70.reverse(); } catch (e) {}
v75 ?? v75;
function F77(a79, a80) {
    if (!new.target) { throw 'must be called with new'; }
    const v81 = this?.constructor;
    try { new v81(v5, F0); } catch (e) {}
}
try { F77.call(v39); } catch (e) {}
new F77(v72, v72);
function f85() {
}
try { f85(); } catch (e) {}
async function f87(a88, a89) {
    a88 ?? a88;
    const v92 = Symbol.asyncDispose;
    Symbol.for(v92.description);
    const v97 = {
        [v92]() {
        },
    };
    v97.e = v97;
    await using v98 = v97;
    const v99 = v98?.e;
    try { new v99(v4, f85); } catch (e) {}
}
f87(v75, v65);
function f102() {
    Symbol.for(Symbol.for().description);
    function f108() {
        Array.e = Array;
        1048576 === 1048576;
        const v112 = -1048576;
        const v113 = "bigint" >> v112;
        const v114 = Array(v39);
        let v115;
        try { v115 = v114.find(v112); } catch (e) {}
        let v116 = v113 ?? v115;
        v116--;
        return { done: true };
    }
    return { next: f108 };
}
const v122 = { [v47]: f102 };
null ?? null;
f85.bind(null, ...v122);
new Uint8ClampedArray(268435441);
const v131 = new Map();
try { v131.clear(); } catch (e) {}
[-2147483649,14,257,-2147483648,-1100576073,268435439,-1644609205];
null ?? null;
class C137 {
    set a(a139) {
    }
}
try { new C137(); } catch (e) {}
const v141 = C137.__defineGetter__;
try { v141.apply(v75, v75); } catch (e) {}
const v143 = class {
}
Int8Array.d = Int8Array;
const v145 = %WasmArray();
delete v143[7];
for (let v150 = 0; v150 < 5; v150++) {
    20000 >>> 20000;
    v150 < 20000;
    const v154 = v23.forEach(f55, v13);
    v154 ?? v154;
    Symbol.f = Symbol;
    const v157 = Symbol.iterator;
    const v166 = {
        [v157]() {
            let v159 = 10;
            const v165 = {
                next() {
                    v159--;
                    const v163 = v159 == 0;
                    return { done: v163, value: v159 };
                },
            };
            return v165;
        },
    };
    v150++;
}
