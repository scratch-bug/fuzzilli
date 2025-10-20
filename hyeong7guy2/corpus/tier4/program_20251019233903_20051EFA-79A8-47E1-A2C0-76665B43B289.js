try {
    const v3 = [Reflect,Reflect,Reflect];
    Reflect.apply((4).toLocaleString, Uint32Array, v3);
} catch(e6) {
    e6.stack;
}
