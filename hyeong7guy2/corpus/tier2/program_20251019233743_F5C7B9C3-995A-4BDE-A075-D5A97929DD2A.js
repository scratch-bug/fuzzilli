function f1() {
    return f1;
}
function f2() {
    function f3() {
        for (let i = 0; i < 5; i++) {
            function F4(a6, a7) {
                if (!new.target) { throw 'must be called with new'; }
                function f8(a9, a10, a11) {
                    function F12(a14, a15) {
                        if (!new.target) { throw 'must be called with new'; }
                        eval(a9);
                    }
                    let v18 = [a11];
                    for (let i20 = 0; i20 < 30000; i20++) {
                        v18[8] = 2;
                        v18 = [this,this,this,this,this];
                    }
                    return f3;
                }
                f8();
                %OptimizeFunctionOnNextCall(f8);
            }
            new F4();
        }
        return { done: true };
    }
    return { next: f3 };
}
const v33 = Symbol.iterator;
f1.bind(null, ...{ [v33]: f2 });
