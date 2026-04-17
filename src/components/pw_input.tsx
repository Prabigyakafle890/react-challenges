import { useState } from "react";

export default function PwInput() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const getPasswordStrength = (password: string) => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    switch (score) {
      case 0:
      case 1:
        return "weak";
      case 2:
        return "weak";
      case 3:
        return "medium";
      case 4:
        return "strong";
      case 5:
        return "very strong";
      default:
        return "weak";
    }
  };

  const strength = getPasswordStrength(password);

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        className="w-full px-3 py-2 border rounded"
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
      >
        {showPassword ? "Hide" : "Show"}
      </button>

      {/* Password strength display */}
      {password && (
        <p className="mt-2 text-sm">
          Strength: <span className="font-semibold">{strength}</span>
        </p>
      )}
    </div>
  );
}
