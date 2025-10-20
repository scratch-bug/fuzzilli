try {
    for (let v0 = 0; v0 < 250; v0++) {
        const v1 = [v0,v0,v0];
        Object.defineProperty(v1, 5, { writable: true, enumerable: true, value: v1 });
        v1.slice();
    }
} catch(e3) {
}
