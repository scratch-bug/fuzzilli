function f0() {
    return f0;
}
const v1 = f0.arguments;
const v2 = { ...v1 };
