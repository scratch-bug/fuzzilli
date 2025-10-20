function f2() {
    return "129";
}
Object.defineProperty(Date, "toString", { value: f2 });
const v3 = new Date(Date);
v3.toTimeString();
