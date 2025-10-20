function f0(a1, a2, a3) {
    const v6 = Symbol.iterator;
    const v24 = {
        [v6]() {
            const v23 = {
                next() {
                    function f9() {
                        return a2;
                    }
                    function f10() {
                        function f11() {
                            const v14 = Array(1048576);
                            let v15;
                            try { v15 = Array.from(...v14, Array); } catch (e) {}
                            Array(1048576);
                            return v15;
                        }
                        f11();
                        return { next: f11 };
                    }
                    const v19 = Symbol.iterator;
                    f9.bind(null, ...{ [v19]: f10 });
                    return f10;
                },
            };
            return v23;
        },
    };
    const v27 = new Int16Array(Date, 882, a1);
    const v28 = new Date(Symbol, Date, 882, ...v27, ...v24);
    return v28;
}
const v32 = new Worker(f0, { type: "function" });
v32.getMessage(v32);
