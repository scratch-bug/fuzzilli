const v3 = class {
    valueOf(a5) {
        return -41991n;
    }
    constructor(a8, a9) {
    }
}
new v3(v3, 0.317622278761984);
const v11 = new v3(-2147483649, v3);
[v3,v11,v3,v3,v11];
const v13 = class {
    get g() {
        return this;
    }
    static {
    }
}
new v13();
[2.6260560565252042,-1.4302678350729098e+308,-696774.5657540616];
try {
    function f25(a26, a27) {
        a26.push(a27);
        new Array();
        const v33 = (a34, a35, a36) => {
        };
    }
    const v37 = async (a38, a39, a40, a41) => {
        const v43 = Symbol.asyncDispose;
        const v45 = {
            value: f25,
            [v43]() {
                return v43;
            },
        };
        await using v46 = v45;
        await a39;
    };
    for (let i49 = 0; i49 < 20000; ++i49) {
        let a = [1,2,3,4,5];
        f25(a);
    }
    const v74 = v13 > 5;
    let {"prototype":v75,...v76} = Uint8Array;
    const v97 = {
        [v74](a93, a94, a95, a96) {
        },
    };
    const v100 = { maxByteLength: 268435440 };
    const v102 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
    const t49 = WebAssembly.Module;
    const v105 = new t49(v102);
    const v106 = WebAssembly.Instance;
    const v109 = {
        set c(a108) {
        },
    };
    const v110 = new v106(v105);
    v110.exports;
} catch(e112) {
}
