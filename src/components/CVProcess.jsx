import { useState } from 'react';
import jsPDF from 'jspdf';

const CVProcess = () => {
  // Retrieving data from localStorage
  const retrievedLocalStorageEdu = localStorage.getItem('formEducationData');
  const retrievedLocalStorageGen = localStorage.getItem('formGeneralData');
  const retrievedLocalStorageExp = localStorage.getItem('formExperienceData');

  // Parsing the retrieved data back into an object
  const formDataObjectEdu = JSON.parse(retrievedLocalStorageEdu);
  const formDataObjectGen = JSON.parse(retrievedLocalStorageGen);
  const formDataObjectExp = JSON.parse(retrievedLocalStorageExp);

  const name = formDataObjectGen ? formDataObjectGen.name : '';
  const surname = formDataObjectGen ? formDataObjectGen.surname : '';
  const phone = formDataObjectGen ? formDataObjectGen.phone : '';
  const photo = formDataObjectGen ? formDataObjectGen.photo : '';

  const school = formDataObjectEdu ? formDataObjectEdu.school : '';
  const country = formDataObjectEdu ? formDataObjectEdu.country : '';
  const degree = formDataObjectEdu ? formDataObjectEdu.degree : '';
  const startDate = formDataObjectEdu ? formDataObjectEdu.startDate : '';
  const endDate = formDataObjectEdu ? formDataObjectEdu.endDate : '';

  const jobTitle = formDataObjectExp ? formDataObjectExp.jobTitle : '';
  const workplace = formDataObjectExp ? formDataObjectExp.workplace : '';
  const description = formDataObjectExp ? formDataObjectExp.description : '';
  const startWorkDate = formDataObjectExp ? formDataObjectExp.startWorkDate : '';
  const endWorkDate = formDataObjectExp ? formDataObjectExp.endWorkDate : '';

  const [isCVVisible, setIsCVVisible] = useState(false);

  const showCV = () => setIsCVVisible(true);
  const hideCV = () => setIsCVVisible(false);

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);

    // Your CV data here
    const cvData = `
      Name: ${name}
      Surname: ${surname}
      Phone: ${phone}

      Education:
      School: ${school}
      Country: ${country}
      Degree: ${degree}
      Start Date: ${startDate}
      End Date: ${endDate}

      Experience:
      Job Title: ${jobTitle}
      Workplace: ${workplace}
      Description: ${description}
      Start Work Date: ${startWorkDate}
      End Work Date: ${endWorkDate}
    `;

    doc.text(cvData, 10, 10);
    doc.save('my_cv.pdf');
  };

  return (
    <div>
      <button className="seeCVButton" onClick={showCV}>
        See your CV
      </button>
      {isCVVisible && (
        <div className="cvModal">
          <div className="cvContent">
            {/* Your CV content goes here */}
            <div className="CV">
              <div className="CVBody">
                {/* General Info */}
                <div className="General">
                  <div className="CVname">{name}</div>
                  <div className="CVname">{surname}</div>
                  <div className="CVname">{phone}</div>
                  <img src={photo} alt="photo" className="photo" />
                </div>

                {/* Education */}
                <div className="Education">
                  <div>{school}</div>
                  <div>{country}</div>
                  <div>{degree}</div>
                  <div>{startDate}</div>
                  <div>{endDate}</div>
                </div>

                {/* Experience */}
                <div className="Experience">
                  <div>{jobTitle}</div>
                  <div>{workplace}</div>
                  <div>{description}</div>
                  <div>{startWorkDate}</div>
                  <div>{endWorkDate}</div>
                </div>
              </div>
            </div>
            {/* End of CV content */}

            <button onClick={hideCV}>Close</button>
            <button onClick={handleDownload}>Download CV as PDF</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CVProcess;
