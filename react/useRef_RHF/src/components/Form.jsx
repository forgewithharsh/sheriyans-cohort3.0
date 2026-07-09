import React, { useRef } from "react";

const Form = () => {
  console.log("Form Rendering...");

  const formRef = useRef({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current.productName.value);
    console.log(formRef.current.price.value);
    console.log(formRef.current.category.value);
    console.log(formRef.current.image.value);
  };

  return (
    <div className="w-80 h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex p-6 rounded bg-white flex-col gap-4"
      >
        <input
          ref={(e) => (formRef.current.productName = e)}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product name"
        />
        <input
        ref={(e) => (formRef.current.price = e)}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Price"
        />
        <span>Select category:</span>
        <select ref={(e) => (formRef.current.category = e)} className="p-2 border border-gray-400 rounded">
          <option value="mens">Mens</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <input
        ref={(e) => (formRef.current.image = e)}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Image"
        />
        <button className="p-2 bg-blue-600 text-white rounded">CREATE</button>
      </form>
    </div>
  );
};

export default Form;
