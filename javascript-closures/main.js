function graduate(credential) {
  function degree(fullName) {
    return `${fullName}, ` + credential;
  }
  return degree;
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('medicalSchool:', medicalSchool('Raymond Ho'));
console.log('lawSchool:', lawSchool('Raymond Ho'));
