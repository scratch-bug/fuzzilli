function F0() {
    if (!new.target) { throw 'must be called with new'; }
    class C2 {
    }
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        const v8 = globalThis.console;
        v8.time();
        v8.timeLog(C2);
    }
    new F3();
}
new F0();
