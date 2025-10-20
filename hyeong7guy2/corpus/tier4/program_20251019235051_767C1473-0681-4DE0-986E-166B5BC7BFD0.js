const v2 = new BigInt64Array(2147483648);
try { Int8Array.from(v2); } catch (e) {}
