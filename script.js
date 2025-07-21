const programList = document.getElementById('program-list');
const typeFilter = document.getElementById('type-filter');
const audienceFilter = document.getElementById('audience-filter');
const accessFilter = document.getElementById('access-filter');

//event listeners to filter programs based on user selections
typeFilter.addEventListener('change', filterPrograms);
audienceFilter.addEventListener('change', filterPrograms);
accessFilter.addEventListener('change', filterPrograms);

//filterprogram function
function filterPrograms () {
  const selectedType = typeFilter.value;
  const selectedAudience = audienceFilter.value;
  const selectedAccess = accessFilter.value;

      programList.innerHTML = ''; //clear the current list

//filter the array of programs based on the selected filters
     programs.forEach(program => {
    const matchesType = selectedType === '' || program.type === selectedType;
    const matchesAudience = selectedAudience === '' || program.audience === selectedAudience;
    const matchesAccess = selectedAccess === '' || program.accessibility === selectedAccess;

    if (matchesType && matchesAudience && matchesAccess) {
      const card = document.createElement('div');
      card.classList.add('program-card');
      card.innerHTML = `
        <h2>${program.name}</h2>
        <p><strong>Type:</strong> ${program.type}</p>
        <p><strong>Audience:</strong> ${program.audience}</p>
        <p><strong>Accessibility:</strong> ${program.accessibility}</p>
      `;
      programList.appendChild(card);
    }
  });
}

//add program cards to the program list
programs.forEach(program => {
const card = document.createElement('div');
  card.classList.add('program-card');

card.innerHTML = `
  <img src="${program.image}" alt="${program.name} thumbnail" class="program-image">
  <h2>${program.name}</h2>
  <p><strong>Type:</strong> ${program.type}</p>
  <p><strong>Audience:</strong> ${program.audience}</p>
  <p><strong>Accessibility:</strong> ${program.accessibility}</p>
`;
programList.appendChild(card);
 });