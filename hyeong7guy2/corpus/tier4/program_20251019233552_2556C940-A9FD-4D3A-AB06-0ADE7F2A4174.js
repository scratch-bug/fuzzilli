try {
    class C3 {
        static #toString(a5) {
            let v6 = 0;
            do {
                try { new WeakMap(); } catch (e) {}
                function f9(a10, a11) {
                    'use strict';
                    return a10;
                }
                try { f9(WeakMap, v6); } catch (e) {}
                v6++;
            } while (v6 < 3)
            return v6;
        }
        static [129](a17) {
            try { gc(); } catch (e) {}
            return 129;
        }
    }
    new C3();
    const v21 = new C3();
    new C3();
    new Uint8ClampedArray(8);
    const t24 = "toString";
    t24.length = "toString";
    function* f28(a29, a30, a31) {
        yield a31;
        return a29;
    }
    f28(460866638, v21, C3);
    const v34 = Symbol.iterator;
    const v43 = {
        [v34]() {
            let v36 = 10;
            const v42 = {
                next() {
                    v36--;
                    const v40 = v36 == 0;
                    return { done: v40, value: v36 };
                },
            };
            return v42;
        },
    };
    [];
    const v48 = {};
    for (let i50 = 0; i50 < 20000; i50++) {
        const v57 = i50 % 0;
        try {
        } catch(e58) {
        } finally {
        }
        v57 ? 2 : v48;
    }
} catch(e60) {
}
