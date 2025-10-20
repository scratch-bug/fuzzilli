function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        const v4 = {};
        const v5 = {};
        const v6 = {};
        const v7 = class {
        }
        const v8 = {};
        const v9 = {};
        const v10 = class {
        }
        class C11 {
        }
        function f12(a13) {
            return f2;
        }
        class C14 extends f12 {
        }
        const v15 = class {
        }
        class C16 {
        }
        const v17 = class {
        }
        class C18 {
        }
        class C19 {
        }
        for (let i21 = 0;
            i21 < 25000;
            (() => {
                i21++;
                const v26 = {};
            })()) {
            const v30 = !v17;
            Math.log1p(v17);
            Math.atan2(-2113175640, v30);
        }
        return { done: v8 };
    }
    return { next: f3 };
}
const v35 = Symbol.iterator;
f1.bind(null, ...{ [v35]: f2 });
