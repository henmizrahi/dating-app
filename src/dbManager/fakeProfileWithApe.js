
import Ape, { name, age, date, arrayOf } from 'ape-mock';
 
const femaleImage = 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSzD0h5Ts3jnLGCzTauZlz9r2rNaIuGg7Rv9hfifKUN_UuUWc&s"
const maleImage = 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmchTqrn0K2ghxqx34Fx3qZBFON3zCsz751oXNqenX78ZcEFtcGQ&s"


export function createFakeProfile(){
  const ape = Ape({
    males: arrayOf({
      name: name().male(),
      lastName: name().lastName(),
      age: age().adult(),
      gender: "male",
      image: maleImage,
      date : date().random().startYearsAgo(2),
    }).random(15, 5),
    females : arrayOf({
      name: name().female(),
      lastName: name().lastName(),
      age: age().adult(),
      gender: "female",
      image: femaleImage,
      date : date().random().startYearsAgo(2),
    }).random(15, 5)
  });
  
  const {males} = ape.generate();
  const {females} = ape.generate();
  const fakeProfiles = males.concat(females);
  const sortFakeProfiles = fakeProfiles.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  });
  return sortFakeProfiles;
}







 

