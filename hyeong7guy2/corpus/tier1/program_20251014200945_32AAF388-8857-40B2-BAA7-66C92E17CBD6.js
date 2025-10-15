function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
    }
    const v42 = {
        construct(a7, a8) {
            try { a8(f5); } catch (e) {}
            return {};
            [0,97,257,109,-268435456,0,0,0,1,4,1,96,0,8,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110];
            eval();
        },
    };
    function f44() {
    }
    const v45 = new Proxy(f44, v42);
    for (let v46 = 0; v46 < 50; v46++) {
        Reflect.construct(v45, []);
    }
}
new F0();
function f51() {
}
function f52(a53, a54) {
}
