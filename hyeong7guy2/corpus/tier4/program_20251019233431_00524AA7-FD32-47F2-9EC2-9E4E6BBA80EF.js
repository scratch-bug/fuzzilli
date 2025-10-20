function f0() {
    return f0;
}
const v1 = class {
}
try {
    f0(1, v1, v1, ...[...1]);
} catch(e5) {
}
