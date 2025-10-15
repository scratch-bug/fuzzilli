class C4 {
}
for (let v5 = 0; v5 < 100; v5++) {
    const v6 = {};
    const v11 = {
        valueOf() {
            super.toString();
        },
    };
    Uint8ClampedArray.toISOString = v6;
}
for (let i13 = 0; i13 < 20000; i13++) {
    typeof {} === "symbol";
}
