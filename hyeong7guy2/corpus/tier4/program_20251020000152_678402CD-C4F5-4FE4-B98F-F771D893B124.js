try {
    const v2 = Temporal.Instant;
    const v3 = new v2(-63356n);
    v2.compare.call(v2, v3);
} catch(e6) {
}
