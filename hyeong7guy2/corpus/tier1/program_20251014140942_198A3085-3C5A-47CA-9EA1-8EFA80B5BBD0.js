function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v6 = class extends F4 {
    }
    function f7(a8) {
        function f10() {
            return v6;
        }
        Object.defineProperty(arguments, 2, { configurable: true, get: f10 });
        return arguments;
    }
    const v11 = f7(f7, v6);
    const v12 = { ...v11 };
}
new F0();
