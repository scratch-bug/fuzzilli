const v3 = class {
    static set g(a5) {
        super.c = a5;
    }
    static set b(a7) {
    }
}
try { new v3(); } catch (e) {}
class C9 extends v3 {
    toString(a11) {
        this / this;
        return "p";
    }
    9 = v3;
}
try { new C9(); } catch (e) {}
try { new WeakMap(); } catch (e) {}
try { new Float32Array(4096); } catch (e) {}
try {
    function f26(a27, a28) {
        try { a27.push(a28); } catch (e) {}
        try { new Array(1); } catch (e) {}
    }
    for (let i34 = 0; i34 < 20000; ++i34) {
        let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        try { a.length = 16; } catch (e) {}
        try { f26(a, 17); } catch (e) {}
    }
    (0)?.[0];
    const v82 = {};
    const v83 = {};
    const v85 = !false;
    function f86() {
        function f87() {
            const v100 = {
                [v82](a91, a92, a93, a94) {
                },
                value: 0,
                p0: 0,
                done: false,
                a: 0,
                lib: v85,
                [true](a96, a97, a98, a99) {
                },
                b: v83,
                done: v85,
            };
            return v100;
        }
        return { next: f87 };
    }
    Symbol?.iterator;
    const v108 = {
        set g(a104) {
            function f106(a107) {
            }
        },
    };
    const v110 = class {
    }
    class C113 extends Map?.constructor {
    }
    function f116(a117, a118) {
    }
    for (let i120 = 0; i120 < 20000; i120++) {
        const v126 = {};
        const v129 = i120 % 2 ? v126 : Object;
        const v130 = {};
        try { f116(v129); } catch (e) {}
    }
    const v139 = [0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11];
    let v140;
    try { v140 = new Uint8Array(v139); } catch (e) {}
    const v142 = WebAssembly?.Module;
    let v143;
    try { v143 = new v142(v140); } catch (e) {}
    const v144 = WebAssembly?.Instance;
    let v145;
    try { v145 = new v144(v143); } catch (e) {}
    v145?.exports;
    const v147 = (0)?.f;
    try { v147(); } catch (e) {}
    [100];
    function f151() {
    }
    const v152 = class {
        #valueOf() {
        }
    }
} catch(e154) {
}
