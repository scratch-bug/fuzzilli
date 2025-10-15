function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 2147483647;
}
new F0();
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
}
function f7() {
    for (let v9 = 0; v9 < 25; v9++) {
        WeakMap[0];
        WeakMap[8] = 2;
        WeakMap = [];
    }
}
f7();
f7();
%OptimizeFunctionOnNextCall(f7);
([0,0,0])["findLast"](f7);
