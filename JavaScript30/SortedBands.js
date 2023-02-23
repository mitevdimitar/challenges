const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const sortedBands = bands.sort((a, b) => {
  const regex = /^(the |a |an )/i;
  const trimmedA = a.replace(regex, "");
  const trimmedB = b.replace(regex, "");
  if (trimmedA < trimmedB) {
    return -1;
  } else {
    return 1;
  }
})

const bandsList = document.querySelector('#bands');

const bandsHtml = sortedBands.map(band => `<li>${band}</li>`).join('');
bandsList.innerHTML = bandsHtml;
