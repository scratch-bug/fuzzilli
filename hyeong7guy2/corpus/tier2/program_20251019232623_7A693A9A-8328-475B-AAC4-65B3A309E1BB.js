function f2() {
    return "undefined";
}
const v3 = /i[\xe2\x81\xa3]+/dusmi;
class C4 {
    #o(a6) {
        ("undefined")[Symbol.match];
        return v3;
    }
}
new C4();
new C4();
new C4();
const v14 = class extends C4 {
    static {
        try {
            super.o("undefined");
        } catch(e17) {
            const v53 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
            const t19 = WebAssembly.Module;
            const v56 = new t19(v53);
            const v57 = { f: f2 };
            const v58 = { m: v57 };
            const t23 = WebAssembly.Instance;
            new t23(v56, v58);
        }
    }
}
new v14();
new v14();
for (let i67 = 0, i68 = 10; i68; i68--) {
}
const v85 = { value: 5 };
const v87 = Temporal.PlainTime;
const v88 = new v87();
v88.millisecond;
const v95 = [616786185,{}];
const v96 = { arguments: v95, type: "function" };
function f111(a112, a113) {
    function f114(a115, a116) {
        return f111;
    }
    f114.c = f114;
    return a112;
}
function f128(a129, a130, a131) {
    return a129;
}
const v135 = new Float64Array(2147);
v135[Symbol.toPrimitive] = v87;
gc();
function f176() {
    return f176;
}
WebAssembly.compileStreaming().catch(f176);
const v181 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f182() {
    const v184 = WebAssembly.compile(v181);
    const v186 = await v184;
    const v187 = WebAssembly.Instance;
    const v188 = Math.exp;
    const v189 = { imp: v188 };
    const v191 = new v187(v186, { env: v189 });
    const v193 = v191.exports.re_exp;
    const v194 = WebAssembly.promising(v193);
    v194(v193, v194, v188, v184, Math);
    return v194;
}
f182();
const v200 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v242 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f243() {
    const v246 = await WebAssembly.compile(v200);
    const v248 = await WebAssembly.compile(v242);
    const t74 = WebAssembly.Instance;
    const v250 = new t74(v246);
    const v251 = WebAssembly.Instance;
    const v253 = v250.exports.exp;
    const v254 = { imp: v253 };
    const v267 = {
        f: 3,
        getOwnPropertyDescriptor(a256, a257) {
            for (let i260 = 0, i261 = 10; i261; i261--) {
            }
            return Symbol;
        },
        env: v254,
    };
    const v268 = new v251(v248, v267);
    const t89 = v268.exports.re_exp;
    t89();
    return 110;
}
f243();
