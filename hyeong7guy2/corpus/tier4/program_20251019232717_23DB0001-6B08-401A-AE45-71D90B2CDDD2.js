function f0(a1, a2) {
    return a1;
}
Reflect.construct(Promise, [f0], f0);
