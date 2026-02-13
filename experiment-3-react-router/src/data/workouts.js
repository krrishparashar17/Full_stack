export const workouts = [
  {
    id: "push",
    title: "Push Day",
    level: "Intermediate",
    time: "45-60 mins",
    focus: "Chest • Shoulder • Triceps",
    description:
      "Push Day focuses on all pushing muscles. Great for strength and upper body shape.",
    exercises: [
      { name: "Bench Press", sets: 4, reps: "8-10" },
      { name: "Incline Dumbbell Press", sets: 3, reps: "10-12" },
      { name: "Overhead Shoulder Press", sets: 4, reps: "8-10" },
      { name: "Lateral Raises", sets: 3, reps: "12-15" },
      { name: "Triceps Dips", sets: 3, reps: "10-12" },
      { name: "Triceps Rope Pushdown", sets: 3, reps: "12-15" }
    ]
  },
  {
    id: "pull",
    title: "Pull Day",
    level: "Intermediate",
    time: "45-60 mins",
    focus: "Back • Biceps",
    description:
      "Pull Day is for your back and biceps. Helps build a wide back and strong arms.",
    exercises: [
      { name: "Pull Ups / Lat Pulldown", sets: 4, reps: "8-12" },
      { name: "Barbell Rows", sets: 4, reps: "8-10" },
      { name: "Seated Cable Row", sets: 3, reps: "10-12" },
      { name: "Face Pulls", sets: 3, reps: "12-15" },
      { name: "Barbell Curls", sets: 3, reps: "10-12" },
      { name: "Hammer Curls", sets: 3, reps: "12-15" }
    ]
  },
  {
    id: "legs",
    title: "Leg Day",
    level: "Hard",
    time: "50-70 mins",
    focus: "Quads • Hamstrings • Glutes • Calves",
    description:
      "Leg Day builds power and overall body strength. Never skip this day 😤",
    exercises: [
      { name: "Squats", sets: 4, reps: "6-10" },
      { name: "Leg Press", sets: 3, reps: "10-12" },
      { name: "Romanian Deadlift", sets: 4, reps: "8-10" },
      { name: "Leg Extensions", sets: 3, reps: "12-15" },
      { name: "Hamstring Curls", sets: 3, reps: "12-15" },
      { name: "Standing Calf Raises", sets: 4, reps: "12-20" }
    ]
  },
  {
    id: "abs",
    title: "Abs + Cardio",
    level: "Beginner",
    time: "25-40 mins",
    focus: "Core • Fat Burn",
    description:
      "Abs day improves core strength and includes cardio for better stamina and fat loss.",
    exercises: [
      { name: "Plank", sets: 3, reps: "45-60 sec" },
      { name: "Crunches", sets: 3, reps: "15-20" },
      { name: "Leg Raises", sets: 3, reps: "12-15" },
      { name: "Russian Twists", sets: 3, reps: "20 reps" },
      { name: "Mountain Climbers", sets: 3, reps: "30-40 sec" },
      { name: "Treadmill / Skipping", sets: 1, reps: "10-15 mins" }
    ]
  }
];
