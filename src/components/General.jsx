import { useState } from "react";

function General() {
  const initialFormData = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    photoName: "", // Store the file name here
  };

  const [formGeneralData, setFormGeneralData] = useState(initialFormData);
  const [fileData, setFileData] = useState(null); // To store the file data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormGeneralData({ ...formGeneralData, [name]: value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert the file to Base64 or handle it as needed
    if (fileData) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result;
        // Combine the form data and file data into one object
        const formDataWithPhoto = {
          ...formGeneralData,
          photo: base64Data,
        };
        localStorage.setItem("formGeneralData", JSON.stringify(formDataWithPhoto));
        setFormGeneralData(initialFormData);
        setFileData(null); // Clear the file data
      };
      reader.readAsDataURL(fileData);
    } else {
      // If no file was selected, store the form data without the photo
      localStorage.setItem("formGeneralData", JSON.stringify(formGeneralData));
      setFormGeneralData(initialFormData);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formwrapper">General information:
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Name"
            required
            value={formGeneralData.name}
            onChange={handleChange}
          />
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            name="surname"
            className="input"
            placeholder="Surname"
            required
            value={formGeneralData.surname}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
            value={formGeneralData.email}
            onChange={handleChange}
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            className="input"
            placeholder="Phone Number"
            required
            maxLength={9}
            value={formGeneralData.phone}
            onChange={handleChange}
          />
          <label>Photo</label>
          <input
            type="file"
            name="photo"
            placeholder="Your photo"
            onChange={handleChange}
            className="input"
            required
          />
          <input type="submit" value="Submit" className="generalBtn" />
        </div>
      </form>
    </>
  );
}

export default General;
