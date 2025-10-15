[5.0,2.2250738585072014e-308,Infinity,4.0,5.027937833050067e+307,3.0,0.11423644496829966];
class C1 {
}
const v3 = class extends C1 {
}
function f6() {
    function f7(a8, a9) {
        new a9();
    }
    const v11 = [];
    for (let v13 = 0; v13 < 500; v13++) {
        v13 < 25000;
        f7(v11, v3);
        ++v13;
    }
}
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.valueOf = f6;
    for (let v27 = 0; v27 < 50; v27++) {
        v27 < 25000;
        ++v27;
    }
    class C33 {
    }
    for (let v37 = 0; v37 < 50; v37++) {
        ++v37;
    }
}
new F21();
