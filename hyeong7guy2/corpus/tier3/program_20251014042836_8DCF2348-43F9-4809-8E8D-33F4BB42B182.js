async function f0(a1) {
    await a1;
    return Error();
}
f0(f0());
