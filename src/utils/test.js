// var window = require('global/window');
// var nodeCrypto = require('crypto');
//
// function randomBytes2()
//   {
//     var bytes = new Uint8Array(32),
//       string = "",
//       i = 0;
//
//     nodeCrypto.getRandomValues(bytes);
//     console.log('1. bytes:'+bytes);
//     console.log('2. bytes.length:'+bytes.length);
//     for (i in bytes) {
//
//       // console.log('1. bytes['+i+']:'+bytes[i]);
//       // console.log('2. toString:'+bytes[i].toString(16));
//       // console.log('3. length:'+bytes[i].toString(16).length));
//       // console.log('4. Array:'+Array((2 - bytes[i].toString(16).length) + 1));
//       // console.log('5. join:' + Array((2 - bytes[i].toString(16).length) + 1).join(0));
//       // console.log('6. bytes[i].toString:'+ bytes[i].toString(16));
//
//       string += Array((2 - bytes[i].toString(16).length) + 1).join(0) + bytes[i].toString(16);
//
//     }
//     console.log('7. string result:'+string);
//     return bigInt(string, 16);
//   }
//
//
// function randomBytes(nBytes) {
//
//     var words = [];
//
//     var r = (function (m_w) {
//
//       console.log('================');
//       var m_w = m_w;
//       var m_z = 0x3ade68b1;
//       var mask = 0xffffffff;
//
//       return function () {
//         m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
//         m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
//         var result = ((m_z << 0x10) + m_w) & mask;
//         result /= 0x100000000;
//         result += 0.5;
//         return result * (Math.random() > .5 ? 1 : -1);
//       }
//     });
//
//     for (var i = 0, rcache; i < nBytes; i += 4) {
//       var _r = r((rcache || Math.random()) * 0x100000000);
//
//       rcache = _r() * 0x3ade67b7;
//       words.push((_r() * 0x100000000) | 0);
//     }
//     console.log(words);
//     return words;
//   }
//
// test('adds 1 + 2 to equal 3', () => {
//   // randomBytes(16);
//   randomBytes2();
// });
function randomBytes(length){
  var words = [];
  var element;
  for (let index = 0; index < length; index++) {
    element =  Math.ceil(Math.random()*200);
    words.push(element);
  }
  console.log('words:'+words);
  return words;
}

test('adds 1 + 2 to equal 3', () => {
  randomBytes(32);
});
