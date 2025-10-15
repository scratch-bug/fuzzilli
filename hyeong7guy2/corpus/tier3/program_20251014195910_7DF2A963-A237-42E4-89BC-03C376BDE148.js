const v3 = new Uint8ClampedArray(13, 13, 13);
try { v3.copyWithin(13, 13, 127n); } catch (e) {}
