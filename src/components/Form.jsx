import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  TextInput,
  NumberInput,
  Select,
} from '@mantine/core';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to backend or perform desired action
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        label="Name"
        placeholder="Enter your full name"
        required
        value={formData.name}
        onChange={handleChange}
        name="name"
      />
      <TextInput
        label="Email"
        placeholder="Enter your email address"
        required
        value={formData.email}
        onChange={handleChange}
        name="email"
      />
      <NumberInput
        label="Phone Number"
        placeholder="Enter your phone number"
        required
        value={formData.phone}
        onChange={handleChange}
        name="phone"
      />
      <Select
        label="Location"
        placeholder="Select your location"
        required
        value={formData.location}
        onChange={handleChange}
        name="location"
      >
        {/* Add your location options here */}
      </Select>
      <Button type="submit" variant="primary" fullWidth>
        Submit
      </Button>
    </Form>
  );
};

export default RegistrationForm;
