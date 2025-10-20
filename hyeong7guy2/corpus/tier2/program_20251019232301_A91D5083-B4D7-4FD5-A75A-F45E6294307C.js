function f1() {
    try {
        (2103).toLocaleString("-1073741824");
    } catch(e5) {
        e5.stack;
    }
    return f1;
}
Object.defineProperty(Uint16Array, "valueOf", { writable: true, enumerable: true, value: f1 });
const v7 = class extends Uint16Array {
}
v7.valueOf = f1;
new Date(Date, v7);
