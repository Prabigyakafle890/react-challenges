import { useGetUser } from "./hooks/useGetUser";
import { useState } from "react";
import { useDebounce } from "./hooks/useDebounce";

export default function GithubProfileFetcher() {
    const [input, setInput] = useState("");
     const debouncedUsername = useDebounce(input, 500);
      const {
    data: user,
    isLoading,
    error,
  } = useGetUser(debouncedUsername);
 return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub user"
        value={input}
        onChange={(e) =>
          setInput(e.target.value)
        }
        className="w-full px-3 py-2 border rounded" 
      />

      {isLoading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">User not found</p>}

      {user && (
        <div>
          <img
            src={user.avatar_url}
            width="100"
            className="rounded-full mb-4"
          />
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.bio}</p>
        </div>
      )}
    </div>
  );

}