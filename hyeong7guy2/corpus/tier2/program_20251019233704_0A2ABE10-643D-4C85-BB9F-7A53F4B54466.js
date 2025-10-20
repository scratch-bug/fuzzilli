function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = this;
}
const v3 = new F1();
const v4 = new F1();
new F1();
function f6() {
}
[-53596,31627,536870912,-1024,-4294967295];
class C8 extends F1 {
    set c(a10) {
        function f11(a12) {
            function f14(a15) {
                let v16 = 10;
                v16--;
                a15 = this;
                const v18 = a10?.[1902023699];
                v18?.[v18];
            }
            try { this.onmessage = this; } catch (e) {}
            const v21 = {};
            try { v21.b = v21; } catch (e) {}
            const v22 = {};
            try { v22.b = v22; } catch (e) {}
            const v23 = {};
            try { v23.b = v23; } catch (e) {}
            try { v23.g = v23; } catch (e) {}
            try { v23.a = v23; } catch (e) {}
            const v24 = {};
            try { v24.g = v24; } catch (e) {}
            try { v24.f = v24; } catch (e) {}
        }
        const v27 = ["function"];
        const v28 = {
            arguments: v27,
            f: f6,
            g: v27,
            next: f6,
            p1: 1000000000.0,
            p1: 1000000000.0,
            type: "function",
        };
        try { new Worker(f11, v28); } catch (e) {}
    }
    static #n(a31, a32, a33, a34) {
        return a32;
    }
    static m(a36, a37) {
        return a37;
    }
}
class C38 extends F1 {
    constructor(a40, a41, a42, a43) {
        super();
        const v46 = Symbol.dispose;
        const v48 = {
            value: v4,
            [v46]() {
            },
        };
        using v49 = v48;
        Array.isArray();
        function f52() {
            return Array;
        }
        function f53() {
            const v55 = Array(1048576);
            try { v55(f52); } catch (e) {}
            const v57 = v55.toString();
            v57[461403] = v57;
            return v57;
        }
        const v58 = { next: f53 };
        try { v58.next(); } catch (e) {}
    }
}
const v60 = new C38(C8, F1, C8, C8);
new C38(v3, v3, v4, v4);
new C38(v60, v60, C8, F1);
const v65 = [-65536,1073741824,512,12];
function f67(a68) {
    function f69() {
        function f70() {
            for (let v71 = 0; v71 < 5; v71++) {
                function F72(a74, a75, a76, a77) {
                    if (!new.target) { throw 'must be called with new'; }
                    try { gc(); } catch (e) {}
                }
                try { new F72(); } catch (e) {}
            }
            const v81 = {};
        }
        return { next: f70 };
    }
    const v83 = [257,8,884999005,-65537,1267384689];
    try { v83[v83](); } catch (e) {}
    const v86 = Symbol?.iterator;
    const v87 = { [v86]: f69 };
    try { a68.bind(null, ...v87); } catch (e) {}
}
const v92 = { type: "function" };
Object.defineProperty(v92, "arguments", { writable: true, enumerable: true, value: v65 });
new Worker(f67, v92);
for (let i95 = 0;
    i95 < 20000;
    (() => {
        const v99 = i95++;
        v99 / v99;
    })()) {
}
