import { useForm } from "react-hook-form";
import axios from "axios"

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("profile_pic", data.profile_pic[0]);

    console.log(data);
  };

  return (
    <main className="min-h-screen bg-[#0f0f0f] px-4 py-10 text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-md rounded-2xl border border-gray-800 bg-[#171717] p-6 shadow-xl"
      >
        <h1 className="mb-6 text-2xl font-bold">
          Create <span className="text-orange-500">Profile</span>
        </h1>

        {/* Name */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required",
            })}
            className="w-full rounded-xl border border-gray-700 bg-[#0f0f0f] px-4 py-3 outline-none placeholder:text-gray-600 focus:border-orange-500"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            className="w-full rounded-xl border border-gray-700 bg-[#0f0f0f] px-4 py-3 outline-none placeholder:text-gray-600 focus:border-orange-500"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Profile Picture */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium">
            Profile Picture
          </label>

          <input
            type="file"
            accept="image/*"
            {...register("profile_pic", {
              required: "Profile picture is required",
            })}
            className="w-full rounded-xl border border-gray-700 bg-[#0f0f0f] p-3 text-sm text-gray-400 file:mr-4 file:rounded-lg file:border-0 file:bg-orange-500 file:px-4 file:py-2 file:font-medium file:text-black"
          />

          {errors.profile_pic && (
            <p className="mt-1 text-sm text-red-400">
              {errors.profile_pic.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-400 active:scale-[0.98]"
        >
          Create Profile
        </button>
      </form>
    </main>
  );
};

export default App;
