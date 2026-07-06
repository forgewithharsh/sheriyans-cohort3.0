import React, { useRef } from "react";

const Form = () => {
  const inpRef = useRef();
  console.log(inpRef);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-80 h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex p-6 rounded bg-white flex-col gap-4"
      >
        <input
          // onChange={(e) =>
          // setFormData({ ...formData, product: e.target.value })
          // }
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product name"
        />
        <input
          // onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Price"
        />
        <span>Select category:</span>
        <select
          // onChange={(e) =>
          //   setFormData({ ...formData, category: e.target.value })
          // }
          className="p-2 border border-gray-400 rounded"
        >
          <option value="mens">Mens</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <input
          // onChange={(e) => setFormData({ ...formData, image: e.target.value })}
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
