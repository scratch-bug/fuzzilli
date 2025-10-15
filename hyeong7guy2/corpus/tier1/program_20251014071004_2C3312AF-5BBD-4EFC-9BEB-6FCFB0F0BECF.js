function f1() {
}
function f2() {
    function f3() {
        for (let i6 = 0; i6 < 20000; i6++) {
        }
        const v12 = class {
        }
        class C13 {
        }
        for (let i16 = 0;
            i16 < 20000;
            (() => {
                ++i16;
                const v21 = {};
            })()) {
            const v24 = {
                10000: 0,
                next() {
                },
            };
        }
        function F25(a27, a28, a29) {
            if (!new.target) { throw 'must be called with new'; }
        }
        for (let i30 = F25; i30 < 25000;) {
        }
        for (let v35 = 0; v35 < 5; v35++) {
            v35++;
        }
        return { done: true };
    }
    return { next: f3 };
}
const v40 = Symbol.iterator;
f1.bind(null, ...{ [v40]: f2 });
