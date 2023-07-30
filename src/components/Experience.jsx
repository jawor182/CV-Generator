import { useState } from 'react';

const Experience = () => {
  const initialFormData = {
    workplace: "",
    startWorkDate: "",
    endWorkDate: "",
    description: "",
    jobTitle: "",
  };
  const [formExperienceData, setFormExperienceData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormExperienceData({ ...formExperienceData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formExperienceData', JSON.stringify(formExperienceData));
    setFormExperienceData(initialFormData);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='formwrapper'>Work information
        <label>Job Title</label>
        <input
          type='text'
          name='jobTitle'
          className='input'
          placeholder='Job Title'
          value={formExperienceData.jobTitle}
          onChange={handleChange}
          required
        />
        <label>Workplace</label>
        <input
          type='text'
          name='workplace'
          className='input'
          placeholder='Workplace'
          value={formExperienceData.workplace}
          onChange={handleChange}
          required
        />
        <label>Description</label>
        <input
          type='text'
          name='description'
          className='input'
          placeholder='Description'
          value={formExperienceData.description}
          onChange={handleChange}
          required
        />
        <label>Start Date</label>
        <input
          type='date'
          name='startWorkDate'
          className='input'
          value={formExperienceData.startWorkDate}
          onChange={handleChange}
          required
        />
        <label>End Date</label>
        <input
          type='date'
          name='endWorkDate'
          className='input'
          value={formExperienceData.endWorkDate}
          onChange={handleChange}
          required
        />
        <input type='submit' value="Submit" className='generalBtn' />
      </div>
    </form>
  );
};

export default Experience;
