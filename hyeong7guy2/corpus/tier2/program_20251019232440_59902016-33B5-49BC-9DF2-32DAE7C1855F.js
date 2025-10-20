const v0 = [1.4503916827376925e+308,246.626141471055,-5.998068005029568e+307,41165.08148592652,-1.6376705048086854e+308,Infinity];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
function f3(a4, a5) {
    for (let i8 = 0, i9 = 10; i9; i9--) {
    }
    function F15() {
        if (!new.target) { throw 'must be called with new'; }
        class C18 {
        }
        const v19 = new C18();
        v19.toJSON = "o";
        const v21 = [20623,20623,v0,v19];
        const v24 = JSON.stringify({ arguments: v21 });
        const v25 = JSON.parse;
        v25.apply(JSON, [v24]);
    }
    new F15();
    return f3;
}
F1.constructor = f3;
class C29 extends F1 {
    static {
        class C32 extends this.constructor {
        }
        new C32();
    }
}
