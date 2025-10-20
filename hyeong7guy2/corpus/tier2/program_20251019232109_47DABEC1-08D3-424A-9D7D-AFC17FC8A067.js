const v11 = {
    construct(a1, a2) {
        function F3() {
            if (!new.target) { throw 'must be called with new'; }
            function f5(a6) {
                const v7 = { ...this };
            }
            f5();
        }
        new F3();
        return Reflect;
    },
};
function f13() {
}
const v14 = new Proxy(f13, v11);
Reflect.construct(v14, v14);
function f17() {
}
function f18(a19, a20) {
}
for (let i22 = 0; i22;) {
    function f25(a26) {
    }
}
function F27(a29) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let v30 = 0; v30 < 5; v30++) {
    function f31(a32, a33) {
    }
}
function f34(a35, a36) {
}
