function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        let v12;
        try { v12 = new a10(75); } catch (e) {}
        const v14 = ([a10]).at(F4);
        try { v14.call(a10, v12); } catch (e) {}
        %OptimizeFunctionOnNextCall(F8);
    }
    new F8(F8);
}
new F1();
