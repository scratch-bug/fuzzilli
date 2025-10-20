try {
    const v1 = Temporal.ZonedDateTime;
    const v4 = { month: 256, timeZone: "-03:00" };
    v1.from(v4, { overflow: "reject" });
} catch(e8) {
}
