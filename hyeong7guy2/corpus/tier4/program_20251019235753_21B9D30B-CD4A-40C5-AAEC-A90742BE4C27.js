try {
    for (let v1 = 0; v1 < 5; v1++) {
        function f2(a3, a4) {
            return a3;
        }
        new Worker(f2, { type: "function" });
    }
} catch(e9) {
}
