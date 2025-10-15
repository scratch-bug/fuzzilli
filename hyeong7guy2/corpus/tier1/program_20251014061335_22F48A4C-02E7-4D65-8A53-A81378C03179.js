function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1000000000.0;
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
                a10[1902023699]?.[a10];
            }
            this.onmessage = f14;
            const t20 = {};
            t20.b = a12;
            const t22 = {};
            t22.b = a12;
            const v23 = {};
            v23.b = a12;
            v23.g = v4;
            v23.a = F1;
            const v24 = {};
            v24.g = v4;
            v24.f = a10;
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
        new Worker(f11, v28);
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
        try { Array.isArray(); } catch (e) {}
        function f52() {
            return Array;
        }
        function f53() {
            const v55 = Array(1048576);
            v55(f52);
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
                    gc();
                }
                new F72();
            }
            const v81 = {};
        }
        return { next: f70 };
    }
    ([257,8,884999005,-65537,1267384689])["join"]();
    const v86 = Symbol.iterator;
    a68.bind(null, ...{ [v86]: f69 });
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
