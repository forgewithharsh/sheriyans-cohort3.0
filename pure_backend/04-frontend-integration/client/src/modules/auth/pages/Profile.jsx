import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-8 py-6 text-center">
          <h1 className="text-xl font-semibold text-white">
            Please login first
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            You need to be authenticated to view your profile.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-12">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Profile
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            Manage your account information.
          </p>
        </div>

        {/* Profile Card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          {/* Avatar */}
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl font-semibold text-white">
              {user.name?.charAt(0).toUpperCase()}
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">{user.name}</h2>

              <p className="text-sm text-zinc-400">{user.email}</p>
            </div>
          </div>

          {/* User Information */}
          <div className="space-y-4 border-t border-zinc-800 pt-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Name
              </p>

              <p className="mt-1 text-sm text-zinc-200">{user.name}</p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Email
              </p>

              <p className="mt-1 text-sm text-zinc-200">{user.email}</p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={logout}
            className="mt-8 rounded-lg border border-red-500/30 bg-red-500/10 px-5 py-2.5 text-sm font-medium text-red-400 transition hover:bg-red-500/20"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
