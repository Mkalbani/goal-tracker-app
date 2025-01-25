export const useFormValidation = (formData) => {
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.length < 2) {
      errors.name = "Name must be at least 2 characters long";
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters long";
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  };

  return validateForm;
};
