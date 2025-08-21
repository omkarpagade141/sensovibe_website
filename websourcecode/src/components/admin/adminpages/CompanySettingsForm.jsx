import React, { useState } from "react"; 
import { toast } from "react-toastify";
import axiosClient from "../../config/axiosClient";

function CompanySettingsForm({companyProfile}) {
  const [formData, setFormData] = useState({
    companyName: companyProfile ? companyProfile.companyName:"",
    companyEmail: companyProfile ? companyProfile.companyEmail:"",
    companyContact: companyProfile ? companyProfile.companyContact:"",
    companyLocalAddress: companyProfile ? companyProfile.companyLocalAddress:"",
    companyCityStatePin: companyProfile ? companyProfile.companyCityStatePin:"",
    companyLogoUrl: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && !["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
      toast.error("Only JPG, JPEG, and PNG images are allowed!");
      return;
    }
    setFormData({ ...formData, companyLogoUrl: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response=await axiosClient.post("/setting/addupdsetting", data);
      if(response.status===200){
      toast.success("Settings updated successfully!");
      }
    } catch (error) {
      toast.error(error.response?.data || "Error updating settings");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-4 shadow-lg rounded bg-white" style={{ width: "600px" }}> 
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            className="form-control mb-3"
            placeholder="Company Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="companyEmail"
            value={formData.companyEmail}
            className="form-control mb-3"
            placeholder="Company Email"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="companyContact"
            value={formData.companyContact}
            className="form-control mb-3"
            placeholder="Company Contact"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="companyLocalAddress"
            value={formData.companyLocalAddress}
            className="form-control mb-3"
            placeholder="Local Address"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="companyCityStatePin"
            value={formData.companyCityStatePin}
            className="form-control mb-3"
            placeholder="City, State, Pin Code"
            onChange={handleChange}
            required
          />
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            className="form-control mb-3"
            onChange={handleFileChange}
                
          />
          <button className="w-100 btn btn-primary mt-3">Update Settings</button>
        </form>
      </div>
    </div>
  );
}

export default CompanySettingsForm;
