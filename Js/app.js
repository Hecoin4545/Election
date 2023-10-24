const Election = document.getElementById('Election-select');
const titleElement = document.getElementById('headline');
const imageElement = document.getElementById('image-area');

Election.addEventListener('change', function () {
  const selectedOption = Election.value;
  switch (selectedOption) {
    case 'option1':
      titleElement.textContent = 'Age-Distribution Of Leaders';
      imageElement.src = '../Pictures/Age-Distribution.jpg';
      break;
    case 'option2':
      titleElement.textContent = 'Male Leaders On The Basis Of Parties ';
      imageElement.src = '../Pictures/Male-Leaders.jpg';
      break;
    case 'option3':
      titleElement.textContent = 'Female Leaders On The Basis Of Parties';
      imageElement.src = '../Pictures/Female-Leaders.jpg';
      break;
    case 'option4':
      titleElement.textContent =
        'Criminal Cases(Atleast 1) On The Basis Of Parties';
      imageElement.src = '../Pictures/Criminal-Charges.jpg';
      break;
    case 'option5':
      titleElement.textContent = 'Criminal Cases ratio b/w Male And Female';
      imageElement.src = '../Pictures/Criminal-male-female.jpg';
      break;
    case 'option6':
      titleElement.textContent = 'Leaders With Huge Liability';
      imageElement.src = '../Pictures/Huge-Liability.jpg';
      break;
    case 'option7':
      titleElement.textContent =
        'Potential Leaders (0 criminal cases , less liability and educated) ';
      imageElement.src = '../Pictures/Future-Leaders.jpg';
      break;
    case 'option8':
      titleElement.textContent = 'Most Assests By Individual ';
      imageElement.src = '../Pictures/Most-Assests.jpg';
      break;
    case 'option9':
      titleElement.textContent = 'Top 5 Parties Distribution';
      imageElement.src = '../Pictures/Party-Dist.jpg';
      break;
  }
});
