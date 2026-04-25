import { useState } from "react";
import { exercises } from "./excerciseData";
import { UseLocalStorageDemo } from "./components/useLocalStorageHook/UseLocalStorageDemo";

export const ExercisePage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedExercise = exercises.find(
    (ex) => ex.id === selectedId
  );

  return (
    <div className="p-5">
   
      <h1 className="text-2xl font-bold mb-4">
        Exercises
      </h1>

      {selectedId !== null && (
        <button
          onClick={() => setSelectedId(null)}
          className="mb-4 underline"
        >
          ← Back
        </button>
      )}
      {selectedId === null ? (
        <div className="space-y-2">
          {exercises.map((ex) => (
            <div
              key={ex.id}
              onClick={() => setSelectedId(ex.id)}
              className="p-3 border rounded cursor-pointer hover:bg-gray-100"
            >
              <h2 className="font-semibold">
                Exercise {ex.id}: {ex.name}
              </h2>
              <p className="text-sm text-gray-600">
                {ex.description}
              </p>
            </div>
          ))}
        </div>
      ) : (

        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">
            {selectedExercise?.name}
          </h2>

          <p className="text-gray-600 mb-4">
            {selectedExercise?.description}
          </p>

   
          {selectedExercise?.component === "UseLocalStorageDemo" ? (
            <UseLocalStorageDemo />
          ) : (
            selectedExercise?.component && (
              <selectedExercise.component />
            )
          )}
        </div>
      )}
    </div>
  );
};


