for (let i2 = 0; i2 < 20000; i2++) {
    const v10 = [Symbol,Object];
    Reflect.apply(Object.is, Object, v10);
}
