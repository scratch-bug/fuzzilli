const v1 = Symbol.iterator;
const v10 = {
    [v1]() {
        let v3 = 10;
        const v9 = {
            next() {
                v3--;
                const v7 = v3 == 0;
                return { done: v7, value: v3 };
            },
        };
        return v9;
    },
};
const v11 = [256,9,4294967297,255,-4294967295,-65536,536870889,-107412262,2147483649,5];
[-4,5,12,60798,762154546,65535,-14,1,1073741823,-65535];
[1000000000.0,1.6227974951539537,-9.787009154744732,-1.0,-7.180439708028871,520125.8083945962,-1000000000.0,434.056536180542,1000000000000.0];
new Set();
[v10,v11];
const v18 = [-Infinity,1.0,-4.7346874668323125];
const v19 = class extends Set {
    set h(a21) {
        a21();
    }
    static #p(a24, a25) {
        return this;
    }
    static #n(a27, a28, a29, a30) {
        return a29;
    }
    static {
    }
}
const v32 = new v19();
const v33 = new v19();
function F38(a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
}
const v42 = new F38();
try { v42.toString(v32, v18, v33); } catch (e) {}
v1.toString = Symbol;
if (v1 == v19) {
} else {
}
const v46 = new F38();
[v46];
function f48(a49, a50) {
    const v56 = [1.1,2.2,3.3,4.4,-751.6156519606214,Int32Array];
    const t48 = {};
    t48.defineProperty = Symbol;
    function f60(a61) {
    }
    for (let i63 = 0; i63 < 958; ++i63) {
        f60();
    }
    new P();
    let v71 = a50.idx;
    for (let i73 = 0; i73 < 1; ++i73) {
        function F80(a82, a83) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v84 = F80.propertyIsEnumerable(1698);
        v84 || v84;
        v71 = v71 + 1;
    }
    v56[v71] = 6.6;
}
const v96 = {
    construct(a92, a93) {
        a93[4284135191];
        return {};
    },
};
const v97 = new Proxy(Object, v96);
const P = v97;
let v99 = false;
for (let i101 = 0; i101 < 25000; ++i101) {
    if (!(i101 === 24999)) {
        v99 = true;
    }
    let holder = { idx: 0 };
    f48(v99, holder);
}
