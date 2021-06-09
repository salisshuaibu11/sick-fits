import { useState } from "react";

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);
  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === "number") {
      value = parseInt(value);
    }

    if (type === "file") {
      [value] = e.target.files;
    }

    setInputs({
      // copy the exisiting state
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blackState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ""])
    );
    setInputs(blackState);
  }

  // return the things we want to surface from this custom hooks
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
