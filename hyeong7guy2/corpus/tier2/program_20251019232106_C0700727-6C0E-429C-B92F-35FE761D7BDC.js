try {
    try {
        Symbol.iterator;
        function f2() {
        }
        function f3() {
            function f4() {
                const v6 = Array();
                const v8 = Array(1048576);
                try { Array.from(...v8, Array, f4, 1048576, v6, f4); } catch (e) {}
                const v11 = Array(1048576);
                v11 ?? v11;
                const v15 = gc(6);
                v15 ?? v15;
                return { done: true };
            }
            return { next: f4 };
        }
        const v19 = Symbol.iterator;
        const v20 = { [v19]: f3 };
        try { f2.bind(null, ...v20); } catch (e) {}
    } catch(e23) {
    }
} catch(e24) {
}
