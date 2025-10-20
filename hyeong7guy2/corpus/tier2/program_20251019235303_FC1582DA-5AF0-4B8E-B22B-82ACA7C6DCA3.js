function f2() {
    return f2;
}
function f3() {
    function f4() {
        class C6 extends Uint32Array {
            static {
                function f8(a9, a10, a11) {
                    try {
                        g = -12;
                    } catch(e13) {
                    }
                    return f8;
                }
                const t14 = f8(f8, f4, f4);
                t14(f8, f8, -12);
            }
        }
        return { done: true };
    }
    return { next: f4 };
}
const v19 = Symbol.iterator;
f2.bind(null, ...{ [v19]: f3 });
