import { useState } from 'react';

const Education = () => {
  const initialFormData = {
    school: '',
    country: '',
    degree: '',
    startDate: '',
    endDate: '',
  };

  const [formEducationData, setEducationFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationFormData({ ...formEducationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the form data in localStorage
    localStorage.setItem('formEducationData', JSON.stringify(formEducationData));

    // Optionally, you can do something else after the data is stored, e.g., show a success message.
    // For example, you could use a state variable to show a success message:
    // setSubmitted(true);

    // Reset the form fields after submission
    setEducationFormData(initialFormData);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='formwrapper'>Education information:
        <label>School Name</label>
        <input
          type='text'
          className='input'
          placeholder='School'
          name='school'
          value={formEducationData.school}
          onChange={handleChange}
          required
        />
        <label>Country</label>
        <input
          type='text'
          className='input'
          placeholder='Country'
          name='country'
          value={formEducationData.country}
          onChange={handleChange}
          required
        />
        <label>Degree</label>
        <input
          type='text'
          className='input'
          placeholder='Degree'
          name='degree'
          value={formEducationData.degree}
          onChange={handleChange}
          required
        />
        <label>Start Date</label>
        <input
          type='date'
          className='input'
          name='startDate'
          value={formEducationData.startDate}
          onChange={handleChange}
          required
        />
        <label>End Date</label>
        <input
          type='date'
          className='input'
          name='endDate'
          value={formEducationData.endDate}
          onChange={handleChange}
          required
        />
        <input type='submit' className='generalBtn' value='Submit' />
      </div>
    </form>
  );
};

export default Education;
