try {
    const v1 = Temporal.PlainDateTime;
    v1.nanosecond = v1;
    v1.from(v1);
} catch(e3) {
}
