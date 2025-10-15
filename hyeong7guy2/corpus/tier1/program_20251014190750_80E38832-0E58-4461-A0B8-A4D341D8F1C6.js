class C0 {
}
const v1 = [C0,C0,C0,C0,C0];
const v2 = class {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            try { a15.apply(C0, C0); } catch (e) {}
        }
        try { F11.call(); } catch (e) {}
        new F11(a10, v1, v2);
        return f7;
    }
    f7();
    %OptimizeFunctionOnNextCall(f7);
}
const v21 = new F3(C0, C0);
new F3(v1, v21);
new F3();
