class C1 {
    static n() {
        Math.asin(10);
        Math.max(10);
        const v7 = !10;
        10 && 10;
        +v7;
        10 << this;
        return this;
    }
}
const v11 = new C1();
class C12 {
    constructor(a14, a15) {
        a14 << a14;
        a15 >>> a15;
    }
    #toString(a20, a21) {
        return a20;
    }
}
try { (1073741825).call(C1); } catch (e) {}
new C12(1073741825, 1073741825);
const v24 = new C12(v11, C1);
const v25 = new C12(v24, v11);
class C26 extends C1 {
    static get g() {
        this();
        return this;
    }
    static #g = 1073741825;
}
const v29 = new C26();
const v30 = new C26();
try { v30.hasOwnProperty(v29); } catch (e) {}
const v32 = [-2147483647,257,-2147483648,-45358];
function f33() {
    return v32;
}
try { new f33(); } catch (e) {}
Symbol.for(Symbol.iterator.description);
const v54 = {
    [f33]() {
        try { Symbol(v25); } catch (e) {}
        gc({ execution: Symbol, type: "major" });
        let v47 = 10;
        const v53 = {
            next() {
                v47--;
                const v51 = v47 == 0;
                return { done: v51, value: v47 };
            },
        };
        return v53;
    },
};
for (let v55 = 0; v55 < 1000; v55++) {
    -v55;
    function f57(a58) {
    }
    for (let i61 = (() => {
            0 ^ 0;
            return 0;
        })();
        i61 < v55;
        ++i61) {
        f57();
    }
}
