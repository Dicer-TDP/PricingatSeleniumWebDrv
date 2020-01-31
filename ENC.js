// Convert character encoding to Shift_JIS from UTF-8.
var utf8Array = new Uint8Array(ghasfdhvwb);
var sjisArray = Encoding.convert(utf8Array, 'SJIS', 'UTF8');
 
// Convert character encoding by automatic detection (AUTO detect).
var sjisArray = Encoding.convert(utf8Array, 'SJIS');
// or  
var sjisArray = Encoding.convert(utf8Array, 'SJIS', 'AUTO');
 
// Detect the character encoding.
// The return value be one of the "Available Encodings" below.
var detected = Encoding.detect(utf8Array);
if (detected === 'UTF8') {
  console.log('Encoding is UTF-8');
}