for (let v0 = 0; v0 < 25; v0++) {
    function f2() {
    }
    function f3() {
        function f4() {
            return { done: true };
        }
        return { next: f4 };
    }
    const v8 = Symbol.iterator;
    const v9 = { [v8]: f3 };
    const v11 = [0.8415705587271156,2.2250738585072014e-308,Infinity,1000000.0,5.948649593116226e+307,NaN,0.305107350938864];
    for (let v12 = 0; v12 < 25; v12++) {
        function f13(a14, a15, a16, a17) {
        }
    }
    let v19 = "fill";
    v11[v19]();
    v19 = "d";
    f2.bind(null, ...v9);
}
