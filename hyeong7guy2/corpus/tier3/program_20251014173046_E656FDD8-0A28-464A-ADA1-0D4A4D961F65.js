const v1 = `unit${Symbol}bigint`;
try { Uint8Array.fromBase64(v1); } catch (e) {}
