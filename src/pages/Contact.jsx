import { useState } from "react";
import { useFormValidation } from "../hooks/useFormValidation";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = useFormValidation(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors: validationErrors } = validateForm();

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically make an API call to your backend
      const mailtoUrl = `mailto:mkalbani96@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
      window.location.href = mailtoUrl;

      setSubmitStatus({
        type: "success",
        message: "Thank you for your message! We will get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormField = (type, name, label, rows = null) => {
    const props = {
      type,
      id: name,
      name,
      value: formData[name],
      onChange: handleChange,
      className: `${styles.input} ${errors[name] ? styles.error : ""}`,
      placeholder: `Enter your ${name}`,
      "aria-invalid": errors[name] ? "true" : "false",
      "aria-describedby": errors[name] ? `${name}-error` : undefined,
    };

    return (
      <div className={styles.formGroup}>
        <label htmlFor={name}>{label}</label>
        {rows ? (
          <textarea {...props} rows={rows} className={styles.textarea} />
        ) : (
          <input {...props} />
        )}
        {errors[name] && (
          <span
            className={styles.errorMessage}
            id={`${name}-error`}
            role="alert"
          >
            {errors[name]}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>

      {submitStatus && (
        <div
          className={`${styles.alert} ${styles[submitStatus.type]}`}
          role="alert"
        >
          {submitStatus.message}
        </div>
      )}

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {renderFormField("text", "name", "Name")}
        {renderFormField("email", "email", "Email")}
        {renderFormField("text", "message", "Message", 5)}

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
