new BigUint64Array(2);
function f31(a32) {
    return 127;
}
const v33 = class extends f31 {
    static set c(a35) {
    }
}
Math.cosh(3);
Math.round(6);
Math.expm1(0);
Math.cos(-11);
Math.fround(6);
Math.pow(0, 6);
const v69 = Symbol.iterator;
const v78 = {
    [v69]() {
        let v71 = 10;
        const v77 = {
            next() {
                v71--;
                const v75 = v71 == 0;
                return { done: v75, value: v71 };
            },
        };
        return v77;
    },
};
const v102 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
gc();
const v146 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f147() {
    const v149 = WebAssembly.compile(v102);
    v149.constructor = f147;
    const v150 = await v149;
    const v152 = await WebAssembly.compile(v146);
    const t36 = WebAssembly.Instance;
    const v154 = new t36(v150);
    const v155 = WebAssembly.Instance;
    const v157 = v154.exports.exp;
    const v158 = { imp: v157 };
    const v160 = new v155(v152, { env: v158 });
    const t42 = v160.exports.re_exp;
    t42();
}
const v167 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
for (let v169 = 0; v169 < 42; v169++) {
}
async function f170() {
    await WebAssembly.compile(v167);
    gc(WebAssembly);
}
f170();
function F176(a178, a179) {
    if (!new.target) { throw 'must be called with new'; }
}
switch (-9007199254740992) {
    case F176:
        break;
}
const v182 = new Float64Array(257);
const v183 = v182.join(v182);
function f184(a185) {
}
const v191 = {
    p(a189, a190) {
        super.f = Float64Array;
    },
};
const v192 = [v183];
new Worker(f184, { arguments: v192, type: "function" });
