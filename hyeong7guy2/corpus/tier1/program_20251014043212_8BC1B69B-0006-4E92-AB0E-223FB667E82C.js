function f0() {
    for (let v1 = 0; v1 < 25; v1++) {
        function f3() {
        }
        function f4() {
            function f5() {
                return { done: true };
            }
            try { new f5(); } catch (e) {}
            return { next: f5 };
        }
        const v10 = Symbol.iterator;
        Symbol.for(v10.description);
        const v14 = { [v10]: f4 };
        const v16 = [0.8415705587271156,2.2250738585072014e-308,Infinity,1000000.0,5.948649593116226e+307,NaN,0.305107350938864];
        for (let v17 = 0; v17 < 25; v17++) {
            function f18(a19, a20, a21, a22) {
            }
        }
        const t19 = "d";
        t19[0] = "d";
        let v24 = "fill";
        v16[v24]();
        v24 = "d";
        f3.bind(null, ...v14);
    }
}
class C28 extends f0 {
    static o(a30, a31) {
        try {
            this.m(a30, this, "cHqq", f0);
        } catch(e33) {
        }
    }
}
new C28();
