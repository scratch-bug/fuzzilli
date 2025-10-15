class C0 {
}
class C1 extends C0 {
}
function f2() {
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v11 = [F3,F3,F3,F3,F3];
        for (let i13 = 0;
            i13 < 20000;
            (() => {
                i13++;
                [F7] = v11;
            })()) {
        }
    }
    const v19 = new F3();
    return v19;
}
C1.constructor = f2;
const v20 = C1.constructor;
v20(v20, v20, v20, C1, C1);
