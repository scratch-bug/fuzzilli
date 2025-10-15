async function* f0(a1, a2, a3, a4) {
    return f0;
}
const t3 = f0.constructor;
t3(f0);
