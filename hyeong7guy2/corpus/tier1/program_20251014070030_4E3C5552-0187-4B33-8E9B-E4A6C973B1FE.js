Date();
WeakSet.constructor;
function f4() {
    for (let v5 = 0; v5 < 25; v5++) {
        function f7() {
        }
        function f8() {
            function f9() {
                true && true;
                return { done: true };
            }
            const v13 = { next: f9 };
            const v14 = v13?.__lookupGetter__;
            try { new v14(); } catch (e) {}
            return v13;
        }
        const v16 = Symbol.iterator;
        const v17 = { [v16]: f8 };
        ([0.8415705587271156,2.2250738585072014e-308,Infinity,1000000.0,5.948649593116226e+307,NaN,0.305107350938864])["fill"]().indexOf(v16);
        const t19 = f7.bind(null, ...v17);
        t19();
    }
}
class C25 extends f4 {
}
new C25();
