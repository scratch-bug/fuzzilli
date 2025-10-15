function f0() {
    Array.fromAsync().then(Array, Array);
    return f0;
}
const v4 = { next: f0 };
v4.next(f0, f0, v4, f0);
