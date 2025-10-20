for (let v0 = 0; v0 < 1000; v0++) {
    const v1 = {};
    const v3 = {};
    const v8 = {
        ownKeys(a5) {
            return ["foo"];
        },
    };
    const v9 = new Proxy(v3, v8);
    Object.assign(v1, v9);
}
