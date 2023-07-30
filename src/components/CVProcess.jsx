
// Retrieving data from localStorage
const retrievedLocalStorageEdu = localStorage.getItem('formEducationData');
const retrievedLocalStorageGen = localStorage.getItem('formGeneralData');
const retrievedLocalStorageExp = localStorage.getItem('formExperienceData');
// Parsing the retrieved data back into an object
const formDataObjectEdu = JSON.parse(retrievedLocalStorageEdu);
const formDataObjectGen = JSON.parse(retrievedLocalStorageGen);
const formDataObjectExp = JSON.parse(retrievedLocalStorageExp);

const name = formDataObjectGen ? formDataObjectGen.name : "";
const surname = formDataObjectGen ? formDataObjectGen.surname : "";
const email = formDataObjectGen ? formDataObjectGen.email : "";
const phone = formDataObjectGen ? formDataObjectGen.phone : "";
const photo = formDataObjectGen ? formDataObjectGen.photo : "";

const jobTitle = formDataObjectExp ? formDataObjectExp.jobTitle :"";
const workplace = formDataObjectExp ? formDataObjectExp.workplace : "";
const description = formDataObjectExp ? formDataObjectExp.description : "";
const startWorkDate = formDataObjectExp ? formDataObjectExp.startWorkDate:"";
const endWorkDate = formDataObjectExp ? formDataObjectExp.endWorkDate:"";
// Accessing the 'school' field from the formDataObject
const school = formDataObjectEdu  ? formDataObjectEdu .school : '';
const country = formDataObjectEdu  ? formDataObjectEdu . country : '';
const degree = formDataObjectEdu  ? formDataObjectEdu .degree : '';
const startDate = formDataObjectEdu  ? formDataObjectEdu .startDate : '';
const endDate = formDataObjectEdu  ? formDataObjectEdu .endDate : '';


function School(school, country, degree, startDate, endDate){
    this.school = school;
    this.country = country;
    this.degree = degree;
    this.startDate = startDate;
    this.endDate = endDate;
}
function General(name, surname, email, phone, photo){
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
  this.photo = photo;
}
function Experience(jobTitle,workplace ,description,startWorkDate,endWorkDate){
  this.jobTitle = jobTitle;
  this.workplace = workplace
  this.description = description
  this.startWorkDate = startWorkDate
  this.endWorkDate = endWorkDate
}
const Education = new School(school, country, degree, startDate, endDate);
const PersonalInfo = new General(name, surname, email, phone, photo);
const Qualities = new Experience(jobTitle, workplace, description, startWorkDate, endWorkDate);

let infoArray = [];
infoArray.push(Education, PersonalInfo, Qualities);
console.log(infoArray);


const CVProcess = () => {
  return (
    <>
    
    </>
  )
}

export default CVProcess