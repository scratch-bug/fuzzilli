function f0(a1, a2) {
    return a2;
}
for (let i = 0; i < 5; i++) {
    Object.defineProperty(Object, 7, { get: f0, set: f0 });
    Object.freeze(Object);
}
