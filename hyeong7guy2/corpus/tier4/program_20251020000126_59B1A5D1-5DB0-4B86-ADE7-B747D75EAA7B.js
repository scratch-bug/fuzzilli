function f0() {
    for (let v2 = 0; v2 < 5; v2++) {
        WeakMap[8] = 2;
        function f4() {
            return WeakMap;
        }
        WeakMap = [f4,f4,f4];
    }
    return WeakMap;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
([0])["findLast"](f0);
