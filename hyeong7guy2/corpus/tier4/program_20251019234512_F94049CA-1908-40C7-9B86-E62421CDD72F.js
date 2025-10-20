for (let i1 = 0; i1 < 20000; i1++) {
    const v9 = Object.is;
    Reflect.apply(v9, Object, v9);
}
