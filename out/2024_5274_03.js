class C {
    static {
        function f(arr) {
            (function() { return this; })();
            arr[0] = 2.2;
        }

        let a = [1.1];
        for (let i = 0; i < 20000; i++) {
            f(a);
        }
    }
}