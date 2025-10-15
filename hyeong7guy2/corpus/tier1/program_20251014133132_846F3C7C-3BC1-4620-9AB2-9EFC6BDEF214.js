function f0() {
}
try {
    function f4() {
    }
    function f5() {
        function f6() {
            return Array(1048576).toString();
        }
        const v11 = ({ next: f6 }).next();
        for (let v13 = 0; v13 < 5; v13++) {
        }
        function f15() {
        }
        class C16 extends f15 {
        }
        class C17 {
        }
        v11.localeCompare();
    }
    const v19 = Symbol.iterator;
    f4.bind(null, ...{ [v19]: f5 });
} catch(e23) {
}
