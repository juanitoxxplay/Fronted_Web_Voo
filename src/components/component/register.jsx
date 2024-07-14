"use client"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Register() {
  const [formData, setFormData] = useState([
    { name: "", email: "", phone: "", address: "", city: "", state: "", zip: "", country: "", dob: "", occupation: "" },
  ])
  const [selectedRole, setSelectedRole] = useState("")
  const addMoreFields = () => {
    setFormData([
      ...formData,
      {
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        dob: "",
        occupation: "",
      },
    ])
  }
  const handleChange = (index, field, value) => {
    const updatedFormData = [...formData]
    updatedFormData[index][field] = value
    setFormData(updatedFormData)
  }
  const handleRoleChange = (role) => {
    setSelectedRole(role)
  }
  return (
    (<div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Registration Form</h1>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <Label htmlFor="role">Select Role</Label>
            <Select value={selectedRole} onValueChange={handleRoleChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="employee">Employee</SelectItem>
                  <SelectItem value="freelancer">Freelancer</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {formData.map((data, index) => (
            <div key={index} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`name-${index}`}>Name</Label>
                  <Input
                    id={`name-${index}`}
                    value={data.name}
                    onChange={(e) => handleChange(index, "name", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`email-${index}`}>Email</Label>
                  <Input
                    id={`email-${index}`}
                    type="email"
                    value={data.email}
                    onChange={(e) => handleChange(index, "email", e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`phone-${index}`}>Phone</Label>
                  <Input
                    id={`phone-${index}`}
                    type="tel"
                    value={data.phone}
                    onChange={(e) => handleChange(index, "phone", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`address-${index}`}>Address</Label>
                  <Input
                    id={`address-${index}`}
                    value={data.address}
                    onChange={(e) => handleChange(index, "address", e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`city-${index}`}>City</Label>
                  <Input
                    id={`city-${index}`}
                    value={data.city}
                    onChange={(e) => handleChange(index, "city", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`state-${index}`}>State</Label>
                  <Input
                    id={`state-${index}`}
                    value={data.state}
                    onChange={(e) => handleChange(index, "state", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`zip-${index}`}>Zip</Label>
                  <Input
                    id={`zip-${index}`}
                    value={data.zip}
                    onChange={(e) => handleChange(index, "zip", e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`country-${index}`}>Country</Label>
                  <Input
                    id={`country-${index}`}
                    value={data.country}
                    onChange={(e) => handleChange(index, "country", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`dob-${index}`}>Date of Birth</Label>
                  <Input
                    id={`dob-${index}`}
                    type="date"
                    value={data.dob}
                    onChange={(e) => handleChange(index, "dob", e.target.value)} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`occupation-${index}`}>Occupation</Label>
                <Input
                  id={`occupation-${index}`}
                  value={data.occupation}
                  onChange={(e) => handleChange(index, "occupation", e.target.value)} />
              </div>
            </div>
          ))}
          <Button onClick={addMoreFields}>Add More</Button>
        </div>
        <div className="bg-muted p-6 rounded-lg shadow-lg">
          {selectedRole === "student" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Student Information</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="student-id">Student ID</Label>
                  <Input id="student-id" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-grade">Grade</Label>
                  <Input id="student-grade" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-school">School</Label>
                  <Input id="student-school" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-gpa">GPA</Label>
                  <Input id="student-gpa" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-extracurricular">Extracurricular Activities</Label>
                  <Input id="student-extracurricular" />
                </div>
              </div>
            </div>
          )}
          {selectedRole === "employee" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Employee Information</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="employee-id">Employee ID</Label>
                  <Input id="employee-id" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employee-department">Department</Label>
                  <Input id="employee-department" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employee-title">Job Title</Label>
                  <Input id="employee-title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employee-salary">Salary</Label>
                  <Input id="employee-salary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employee-benefits">Benefits</Label>
                  <Input id="employee-benefits" />
                </div>
              </div>
            </div>
          )}
          {selectedRole === "freelancer" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Freelancer Information</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="freelancer-rate">Hourly Rate</Label>
                  <Input id="freelancer-rate" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="freelancer-skills">Skills</Label>
                  <Input id="freelancer-skills" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="freelancer-portfolio">Portfolio</Label>
                  <Input id="freelancer-portfolio" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="freelancer-experience">Years of Experience</Label>
                  <Input id="freelancer-experience" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="freelancer-certifications">Certifications</Label>
                  <Input id="freelancer-certifications" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>)
  );
}
