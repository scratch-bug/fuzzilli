async function f0(a1) {
    await a1;
    return Error(a1).stack;
}
f0(f0());
