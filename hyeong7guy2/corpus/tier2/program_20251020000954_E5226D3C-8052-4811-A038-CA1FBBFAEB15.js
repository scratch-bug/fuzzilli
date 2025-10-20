function f0() {
    return f0;
}
function f2() {
    return f2;
}
function f3() {
    function f4() {
        const v5 = {};
        function f7() {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                function F12(a14, a15) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f16() {
                        const v17 = { a: a14 };
                        Object.defineProperty(v5, JSON, { enumerable: true, get: f2, set: f0 });
                        const t17 = JSON.stringify;
                        t17(v17);
                        for (let i23 = 0, i24 = 10; i24; i24--) {
                        }
                        function f30(a31) {
                        }
                        return f30;
                    }
                    Object.defineProperty(this, "toString", { get: f16 });
                }
                const v32 = new F12(a10);
                class C33 {
                    static [v32](a35, a36, a37) {
                    }
                }
            }
            new F8(v5);
            return Date;
        }
        Object.defineProperty(v5, "toString", { get: f7 });
        for (let v39 = 0; v39 < 5; v39++) {
            v5 >= -65537n;
        }
        return { done: true };
    }
    return { next: f4 };
}
const v45 = Symbol.iterator;
f2.bind(null, ...{ [v45]: f3 });
