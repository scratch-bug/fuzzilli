try {
    function f0() {
    }
    try { new Float32Array(256); } catch (e) {}
    function f6() {
        return f0;
    }
    const v9 = Symbol?.iterator;
    const v18 = {
        [v9]() {
            let v11 = 10;
            const v17 = {
                next() {
                    v11--;
                    const v15 = v11 == 0;
                    return { done: v15, value: v11 };
                },
            };
            return v17;
        },
    };
    try { new Uint32Array(1000); } catch (e) {}
    let v24;
    try { v24 = new Array(127); } catch (e) {}
    class C25 {
        #o(a27) {
            try { v24.length = -6; } catch (e) {}
            function f29(a30, a31, a32, a33) {
                this[Symbol?.asyncIterator] = f29;
            }
            try { new Promise(f29); } catch (e) {}
            return Array;
        }
        o(a40, a41) {
            return a41;
        }
    }
    try { new C25(); } catch (e) {}
    let v43;
    try { v43 = new C25(); } catch (e) {}
    const v44 = [127,127,C25];
    const v45 = [2.2250738585072014e-308,-1000000.0,-1000000000.0,-13536.709902805625];
    function F47(a49, a50, a51) {
        if (!new.target) { throw 'must be called with new'; }
        try { this.a = a49; } catch (e) {}
        try { this.h = a49; } catch (e) {}
        try { v45.join(a50, ...v44, 536870912, a50); } catch (e) {}
        try { v24["shift"](..."shift", ...v44, v24, F47); } catch (e) {}
        let v55 = Array.bind(this);
        try { this.d = v43; } catch (e) {}
    }
    try { new F47(v44, v24, v45); } catch (e) {}
    class C59 {
    }
    const v96 = [0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0];
    let v97;
    try { v97 = new Uint8Array(v96); } catch (e) {}
    const v99 = WebAssembly?.Module;
    let v100;
    try { v100 = new v99(v97); } catch (e) {}
    function f101() {
        return 0;
    }
    const v102 = { f: f101 };
    const v103 = { m: v102 };
    const v104 = %WasmArray();
    const v105 = WebAssembly?.Instance;
    try { new v105(v100, v103); } catch (e) {}
    try { new Float32Array(); } catch (e) {}
    function f110(a111) {
    }
    class C112 extends f110 {
    }
    function f114() {
    }
    let v116;
    try { v116 = WebAssembly.instantiateStreaming(); } catch (e) {}
    try { v116.catch(f114); } catch (e) {}
    try { gc(); } catch (e) {}
    function f120() {
        return NaN;
    }
    class C122 {
    }
    let v123 = false;
    function f124(a125) {
        const v126 = !a125;
        return;
        function f127() {
        }
        const v132 = {
            start(a129) {
                const generator = f127;
                [9n,v126];
            },
        };
        function f133() {
        }
        try { WebAssembly.instantiate(f133); } catch (e) {}
    }
    for (let i137 = 0;
        i137 < 25000;
        (() => {
            i137++;
            try { Uint8Array.g = Uint8Array; } catch (e) {}
        })()) {
        if (i137 > 24999) {
            v123 = true;
        }
        try { f124(v123); } catch (e) {}
    }
} catch(e148) {
}
