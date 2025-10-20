const v2 = Temporal.Duration;
const v3 = new v2();
try {
    const v4 = { milliseconds: 43051 };
    v2.compare(v3, v4, { relativeTo: v2 });
} catch(e7) {
}
