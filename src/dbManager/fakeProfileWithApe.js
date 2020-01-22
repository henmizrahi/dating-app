
import Ape, { name, age, date, arrayOf } from 'ape-mock';
 
const femaleImage = [
"https://img.wcdn.co.il/f_auto,w_700/9/1/2/8/912879-46.jpg",
"https://mfiles.alphacoders.com/497/497044.jpg",
"https://i.pinimg.com/originals/bf/d7/67/bfd767a004baf83f1d9aab126beb0559.jpg",
"https://www.tiuli.com/image/7703ca2ed79be2944781bbbea046abcb.jpg?&width=1080"
]
const maleImage = [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmchTqrn0K2ghxqx34Fx3qZBFON3zCsz751oXNqenX78ZcEFtcGQ&s",
"https://cdn.friendlystock.com/wp-content/uploads/2018/10/6-superhero-with-cape-flying-like-superman-vector-clipart.jpg",
"https://i2.wp.com/manapop.com/wp-content/uploads/2015/04/Superman-the-icon.jpg",
"https://www.alllies.org/wp-content/uploads/2011/04/A313.jpg"

]

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







 

