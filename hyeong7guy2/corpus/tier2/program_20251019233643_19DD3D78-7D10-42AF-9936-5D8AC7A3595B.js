function f0() {
    const v3 = new Int16Array(512);
    function f4() {
        return v3;
    }
    const v5 = [693913.4712015034,-314050.5385797281];
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        Object.defineProperty(a8, "constructor", { enumerable: true, value: f4 });
        const v10 = v5.constructor;
        const v11 = v10(F6, v3, 512, v10);
        v11[45] = v11;
    }
    const v12 = new F6(v5);
    return v12;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
