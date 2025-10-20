for (let i2 = 0; i2 < 100000; ++i2) {
    function f8() {
        return f8;
    }
    const v9 = -2147483648 === i2;
    Math.fround() / v9;
}
