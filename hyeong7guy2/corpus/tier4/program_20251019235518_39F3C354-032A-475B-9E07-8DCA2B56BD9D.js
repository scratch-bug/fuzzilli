const v3 = new Uint8ClampedArray(4);
try { v3.slice(13n); } catch (e) {}
new Float64Array(v3);
