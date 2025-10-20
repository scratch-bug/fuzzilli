function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        const v6 = `string${Map}undefined`;
        return v6 == v6.charAt(a2);
    }
    f4(a2);
    return f4;
}
new F0(F0);
const v11 = new F0();
%OptimizeFunctionOnNextCall(v11);
v11();
