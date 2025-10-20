const v2 = new BigInt64Array(2103);
try {
    v2.toLocaleString("-1073741824");
} catch(e5) {
    e5.stack;
}
