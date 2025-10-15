function f1() {
    const v3 = Object[Symbol];
    function f4() {
        for (let i8 = 0, i9 = 10;
            i9;
            (() => {
                new v3(i9, Array, Object, i8);
                Array[0];
                i8 & i8;
            })()) {
        }
        return f4;
    }
    return { next: f4 };
}
const v19 = f1().next;
try { v19(); } catch (e) {}
