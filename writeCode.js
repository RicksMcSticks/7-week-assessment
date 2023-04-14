//1\\
let array = [28, 43, 75, 30, 8, 0]

// Write your solution below:
let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}

console.log(value)
//o(n^2)




//2\\
function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }
  console.log(hasUniqueChars("monday"))
//true
//0(n)



//3\\
const test = (string) => {
    if (typeof string !== 'string') {
      return 'It must be a string.'
    }
    const result = new Set()
    for (const ch of string.toUpperCase()) 
    {
      if (/[A-Z]/.test(ch)) 
      {
          result.add(ch)
      }
    }
    return result.size === 26
  }
  console.log(test("The quick brown fox jumps over the lazy dog"))
  //true
  //O(n)

  //4\\
  const str = 'I ran to go see the pokemon gengar on top of the mountain!';
  const findLongest = (str = '') => {
     const strArr = str.split(' ');
     const word = strArr.reduce((acc, val) => {
        let { length: len } = acc;
        if(val.length > len){
           acc = val;
        };
        return acc;
     }, '');
     return word;
  };
  console.log(findLongest(str));
  //mountain
  //O(n)