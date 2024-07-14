import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    const random = Math.random();
    setLoading(true);
    try {
      await wait(2000);
      if (random < 0.5) {
        throw new Error("Something went wrong");
      }
      const successMessage = `Thanks for your submission ${data.firstName}, we will get back to you shortly!`;
      setResponse({ type: 'success', message: successMessage });
      return { type: 'success', message: successMessage }; // Ensure to return response here
    } catch (error) {
      const errorMessage = 'Something went wrong, please try again later!';
      setResponse({ type: 'error', message: errorMessage });
      return { type: 'error', message: errorMessage }; // Ensure to return response here
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
