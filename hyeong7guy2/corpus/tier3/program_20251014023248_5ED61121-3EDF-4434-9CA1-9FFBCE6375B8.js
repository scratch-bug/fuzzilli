const v1 = Symbol.MAX_VALUE;
function f2() {
    return Worker(v1);
}
try { f2(); } catch (e) {}
