function f1() {
    return Uint8ClampedArray;
}
function f2(a3) {
    const v4 = [a3,a3,a3];
    let v5 = () => {
        if (a3) {
            v4[0] = 1.1;
        }
        v5 = f1;
        return f1;
    };
    return v4.push(v5);
}
for (let i9 = 0;
    (() => {
        let v11 = 0;
        while (v11 < 3) {
            new Uint8ClampedArray(v11++);
        }
        return i9 < 25000;
    })();
    i9++) {
    f2(f1);
}
