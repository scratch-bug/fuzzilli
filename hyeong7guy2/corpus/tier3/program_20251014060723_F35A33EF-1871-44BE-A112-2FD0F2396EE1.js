function f0() {
    return f0;
}
let v2 = f0.bind();
1 instanceof v2;
