const poemLines = [
  "ze vragen me om mezelf geluk toe te wensen",
  "en aan iemand van wie ik hou",
  "en aan iemand die ik haat",
  "",
  "ze vragen me stil te staan bij wat ik geloof",
  "welke sensaties ik kan voelen",
  "ze vragen me om video’s van vissen te kijken ",
  "als dat me rust geeft",
  "mijn ontspanning een prioriteit te maken",
  "zelfs als ik er niet in geloof",
  "zelfs als alles in mij schreeuwt",
  "dat opboksen gelijk aan overleven is",
  "zelfs als, wanneer ik me focus op mijn ademhaling",
  "ik begin te huilen",
  "omdat het jaren geleden is dat ik mijn lichaam kon voelen",
  "omdat ik mijn bagage als lucht voorstelde",
  "ze vragen me om te doen alsof ik van mezelf hou",
  "omdat liegen machtig is",
  "omdat ik mijn eigen geliefde kan zijn",
  "omdat ik verdien om te bestaan",
  "en bestaansrecht ook in rust soeverein is",
  "ze vragen me om te geloven dat ik het op een dag geloof",
  "om mezelf die tijd te geven",
  "om woorden vol liefde mijn medicijn te maken",
  "en de gewenningsperiode te accepteren",
  "om het gevecht met mijn verharding te overleven",
  "",
  "en ik wil overleven",
  "niet alleen dat",
  "ik wil leven",
  "ooit wil ik gelukkig leven",
  "",
  "dus vandaag wens ik mezelf geluk toe",
  "en ik wens het ook voor jou",
  "",
  "",
  "Marin de Wild, 2024"
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
