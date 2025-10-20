for (let i2 = 2147483648, i3 = 10; i3; i3--) {
}
gc({ execution: "async", type: "minor" });
const v15 = new ArrayBuffer(2147483648);
const v17 = new DataView(v15);
v17.length = 2656;
