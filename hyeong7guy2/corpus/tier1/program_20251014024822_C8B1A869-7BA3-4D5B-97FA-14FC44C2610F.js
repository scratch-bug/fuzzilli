const v2 = new Float64Array(736);
const v3 = [v2,v2,v2,v2];
function f5() {
    return f5;
}
class C6 extends f5 {
}
const v8 = Symbol.iterator;
Symbol.for(v8.description);
const v24 = {
    [v8]() {
        let v13 = 10;
        const v23 = {
            f: f5,
            [Symbol]() {
                const v17 = {
                    next() {
                        const v16 = {};
                    },
                };
            },
            next() {
                v13--;
                const v21 = v13 == 0;
                return { done: v21, value: v13 };
            },
        };
        return v23;
    },
};
new WeakSet();
const v28 = [v2,false,false];
[v28,v24,v28,736];
const v31 = [1.2668668598066045e+306,2.220446049250313e-16,0.4514302561022163,0.6404626457598327,6.054545413250072e+307,-991135.8904208896];
try { v31.fill(v3); } catch (e) {}
0 >> 0;
115 >>> 115;
109 !== 109;
0 != 0;
~7;
~127;
11 + 11;
let v60 = 1;
v60++;
109 >> 109;
3 / 3;
const v79 = {
    construct(a77, a78) {
        return 3;
    },
};
101 - 101;
const v83 = WebAssembly.exports;
v83 ?? v83;
function f85(a86) {
    return 127;
}
function f87(a88) {
    let func = f85;
    if (a88 === 100) {
        func = v83;
    }
    try {
        try { WebAssembly.promising(func); } catch (e) {}
    } catch(e93) {
    }
}
for (let i95 = 0; i95 <= 100; ++i95) {
    f87(i95);
}
