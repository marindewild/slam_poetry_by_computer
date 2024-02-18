const poemLines = [
    "Van jouw spieren kan een coach",
    "medailles kweken.",
    "Je bent 11, talentteam Papendal,",
    "achter in de auto,",
    "de snelweg een springplank,",
    "spieren, spanning, kracht.",
    "",
    "Student nu, de spelen een jaar uitgesteld,",
    "de lucht een brug naar Tokyo,",
    "vliegen door tijdzones,",
    "je praat met niemand, al weken niet,",
    "isolatie, top 24 van de wereld,",
    "de echte competitie COVID.",
    "", 
    "Woensdag, kwalificatie,",
    "de kogel in je hand",
    "een verlengde van je lichaam,",
    "spiermassa, techniek, explosie,",
    "je gooit, twee keer, geen 18 meter",
    "21ste van de wereld, niet goed genoeg",
    "",
    "Aanspannen, Ontspannen",
    "",
    "Afdruipen"
];

  let lineIndex = 0;
  let charIndex = 0;
  const speed = 60; // typing speed in milliseconds
  const poemElement = document.getElementById('poem');

  function typePoem() {
    if (lineIndex < poemLines.length) {
      if (charIndex < poemLines[lineIndex].length) {
        poemElement.innerHTML += poemLines[lineIndex].charAt(charIndex);
        charIndex++;
        if (poemLines[lineIndex].charAt(charIndex) == ',' || poemLines[lineIndex].charAt(charIndex) == '.'){
            poemElement.innerHTML += poemLines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typePoem, speed * 5);
        }
        else
            setTimeout(typePoem, speed);
      } else if (charIndex != 0) {
        // Move to the next line
        lineIndex++;
        charIndex = 0;
        poemElement.innerHTML += '<br>'; // Add line break
        setTimeout(typePoem, speed * 10); // Pause at end of line
      }
      else {
        // Move to the next paragraph
        lineIndex++;
        poemElement.innerHTML += '<br>'; // Add line break
        setTimeout(typePoem, speed * 25); // Pause at end of line
      }
    }
  }
      setTimeout(typePoem, speed * 60);