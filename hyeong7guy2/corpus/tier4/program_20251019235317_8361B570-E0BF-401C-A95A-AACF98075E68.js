function f0() {
    return f0;
}
const v1 = f0.bind();
const v2 = v1.bind(v1);
v2.bind(v2, v1, v2, f0, v2).name;
