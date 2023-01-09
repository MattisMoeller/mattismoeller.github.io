function removeVowels(string) {

    let vokaler = ['a', 'e', 'i', 'o', 'u','æ','ø','å'];



    let nyString = "";



    for (let i = 0; i < string.length; i++) {

      if (vokaler.indexOf(string[i].toLowerCase()) === -1) {

        nyString += string[i];

      }

    }

    return nyString;

  }



  let string = prompt("Skriv inn en tekst string.");

  let nyString = removeVowels(string);

  console.log(nyString);