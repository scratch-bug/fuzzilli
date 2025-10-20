let v1;
try { v1 = Uint8ClampedArray(); } catch (e) {}
JSON.stringify(JSON, v1, 1024);
