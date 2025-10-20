class C1 {
    static [false]() {
        return EvalError;
    }
    static #d = false;
}
const v4 = new C1();
const v7 = [-1.7976931348623157e+308,-4.4823762337358727e+307,8.924914409753473,-1000.0,0.6053407792954958,1.4651497821803397e+308];
function f8(a9, a10) {
    for (let i13 = 0, i14 = 10; i13 < i14; i13++, i14--) {
        try { a10(C1, -1054, false); } catch (e) {}
        a10?.g;
        delete C1?.a;
    }
    return -128;
}
v7.toString = f8;
class C27 extends C1 {
    static [false](a29, a30) {
    }
    static [v7](a32, a33) {
        return v4;
    }
}
new C27();
new C27();
try {
    const v39 = Intl.NumberFormat;
    const v41 = { unit: "pw" };
    v41.style = v7;
    v39("yue", v41);
} catch(e43) {
}
