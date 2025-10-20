function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4) {
        if (!new.target) { throw 'must be called with new'; }
    }
    this.d = -2147483649;
    function f6() {
    }
    return f6;
    function F7(a9, a10, a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        const v14 = {};
        function f16() {
        }
        const v17 = new Proxy(f16, v14);
        const v18 = new v17();
        v18.push(f16, v14, F0, f6, v18);
    }
    const v20 = new F7();
    return v20;
}
const v21 = new F0();
const v22 = new F0();
const v23 = new F0();
const v24 = class extends v23 {
}
new v24();
class C26 extends F0 {
    static get a() {
    }
}
function f28(a29) {
}
const v30 = new C26();
const v31 = new C26();
const v32 = new C26();
const v33 = new C26();
function F34(a36, a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
}
const v39 = new F34(v23, C26, v21);
const v40 = new F34(v23, v30, v21);
const v41 = new F34(v22, v40, v21);
new F34(v33, v41, v31);
function F43(a45, a46) {
    if (!new.target) { throw 'must be called with new'; }
    class C47 {
    }
    function F48(a50, a51) {
        if (!new.target) { throw 'must be called with new'; }
        try { this(a46); } catch (e) {}
    }
    new F48();
    const t53 = Intl.v8BreakIterator();
    t53.length = 256;
    for (let i59 = 0;
        (() => {
            20000 instanceof Float64Array;
            const v62 = i59 < 20000;
            !v62;
            return v62;
        })();
        (() => {
            ++i59;
            const v66 = [-1000.0,3.0,-2.2250738585072014e-308,5.0,-2.0,0.0];
            function F67(a69, a70) {
                if (!new.target) { throw 'must be called with new'; }
                function f71() {
                    function f72(a73) {
                        function f74() {
                            return f72;
                        }
                        const v82 = {
                            construct(a76, a77) {
                                a76.length = a76;
                                a76.toString();
                                [f74,f74,a73,v39];
                                const v80 = {};
                                a73 % v32;
                            },
                        };
                        try { v82.construct(v66); } catch (e) {}
                        v82.construct(f74);
                    }
                    return f72;
                }
                Object.defineProperty(this, "toString", { get: f71 });
            }
        })()) {
    }
    class C86 extends C47 {
    }
    function f87() {
    }
    class C88 {
    }
    const v89 = class extends C88 {
    }
    class C91 {
    }
    const v92 = {};
    for (let v93 = 0; v93 < 5; v93++) {
        for (let v94 = 0; v94 < 5; v94++) {
        }
        for (const v95 in "boolean") {
        }
        const v96 = {};
        function f98(a99) {
        }
        const v100 = %WasmArray();
        class C101 extends f98 {
        }
        const v102 = {};
        for (let i104 = 0; i104 < 20000; i104++) {
        }
        const v111 = ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match();
        const v112 = {};
        function f113(a114, a115) {
            return C101;
        }
        class C116 {
        }
        12 == (-26614n >> -26614n);
        for (const v121 of v111) {
        }
        function f122(a123) {
            return a123;
        }
        const v124 = class extends f122 {
        }
    }
    for (let v125 = 0; v125 < 5; v125++) {
    }
    for (const v126 of "boolean") {
    }
}
new F43();
