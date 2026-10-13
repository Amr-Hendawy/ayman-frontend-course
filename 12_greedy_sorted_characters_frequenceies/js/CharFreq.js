function CharFreq(message) {
  this.message = message;

  this.ASCIIMethod = function () {
    console.log("ASCIIMethod");

    let freq = new Array(128).fill(0);

    for (let i = 0; i < this.message.length; i++) {
      let current_code = this.message.charCodeAt(i);

      freq[current_code]++;
    }

    for (let i = 0; i < freq.length; i++) {
      if (freq[i] > 0) {
        let c = String.fromCharCode(i);

        console.log(c + " " + freq[i]);
      }
    }
  };
}

// class CharFreq {
//   constructor(message) {
//     this.message = message;
//   }

//   ASCIIMethod() {
//     console.log("ASCIIMethod");
//     let freq = new Array(128).fill(0);

//     for (let i = 0; i < this.message.length; i++) {
//       let current_code = this.message.charCodeAt(i);

//       freq[current_code]++;
//     }
//     for (let i = 0; i < freq.length; i++) {
//       if (freq[i] > 0) {
//         let c = String.fromCharCode(i);

//         console.log(c + " " + freq[i]);
//       }
//     }
//   }
// }

export default CharFreq;
