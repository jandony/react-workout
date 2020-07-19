// body images
import Neck from "./Assets/Images/neck.jpg";
import Traps from "./Assets/Images/traps.jpg";
import Shoulders from "./Assets/Images/shoulders.jpg";
import Chest from "./Assets/Images/chest.jpg";
import Abs from "./Assets/Images/abs.jpg";
import Lats from "./Assets/Images/lats.jpg";
import Back from "./Assets/Images/back.jpg";
import Biceps from "./Assets/Images/biceps.jpg";
import Triceps from "./Assets/Images/triceps.jpg";
import Forearms from "./Assets/Images/forearms.jpg";

import Glutes from "./Assets/Images/glutes.jpg";
import Quads from "./Assets/Images/quads.jpg";
import Hamstrings from "./Assets/Images/hamstrings.jpg";
import Calves from "./Assets/Images/calves.jpg";

class MuscleGroup {
  constructor(name, slug, body, exercises, image) {
    this.name = name;
    this.slug = slug;
    this.body = body;
    this.exercises = exercises;
    this.image = image;
  }
}

const neck = new MuscleGroup(
  "Neck",
  "neck",
  "Upper",
  [
    { name: "Neck Ex 1", slug: "NeckEx1", image: Neck },
    { name: "Neck Ex 2", slug: "NeckEx2", image: Neck },
  ],
  Neck
);

const traps = new MuscleGroup(
  "Traps (trapezius)",
  "traps",
  "Upper",
  [
    { name: "Traps Ex 1", slug: "TrapsEx1", image: Traps },
    { name: "Traps Ex 2", slug: "TrapsEx2", image: Traps },
  ],
  Traps
);

const shoulders = new MuscleGroup(
  "Shoulders (deltoids)",
  "shoulders",
  "Upper",
  [
    { name: "Shoulders Ex 1", slug: "ShouldersEx1", image: Shoulders },
    { name: "Shoulders Ex 2", slug: "ShouldersEx2", image: Shoulders },
  ],
  Shoulders
);

const chest = new MuscleGroup(
  "Chest (pectoralis)",
  "chest",
  "Upper",
  [
    { name: "Chest Ex 1", slug: "ChestEx1", image: Chest },
    { name: "Chest Ex 2", slug: "ChestEx2", image: Chest },
  ],
  Chest
);

const abs = new MuscleGroup(
  "Abs (abdominis)",
  "abs",
  "Upper",
  [
    { name: "Abs Ex 1", slug: "AbsEx1", image: Abs },
    { name: "Abs Ex 2", slug: "AbsEx2", image: Abs },
  ],
  Abs
);

const lats = new MuscleGroup(
  "Lats (latissimus dorsi)",
  "lats",
  "Upper",
  [
    { name: "Lats Ex 1", slug: "LatsEx1", image: Lats },
    { name: "Lats Ex 2", slug: "LatsEx2", image: Lats },
  ],
  Lats
);

const middleBack = new MuscleGroup(
  "Middle Back",
  "middle-back",
  "Upper",
  [
    { name: "Middle Back Ex 1", slug: "MiddleBackEx1", image: Back },
    { name: "Middle Back Ex 2", slug: "MiddleBackEx2", image: Back },
  ],
  Back
);

const lowerBack = new MuscleGroup(
  "Lower Back",
  "lower-back",
  "Upper",
  [
    { name: "Lower Back Ex 1", slug: "LowerBackEx1", image: Back },
    { name: "Lower Back Ex 2", slug: "LowerBackEx2", image: Back },
  ],
  Back
);

const biceps = new MuscleGroup(
  "Biceps",
  "biceps",
  "Upper",
  [
    { name: "Biceps Ex 1", slug: "BicepsEx1", image: Biceps },
    { name: "Biceps Ex 2", slug: "BicepsEx2", image: Biceps },
  ],
  Biceps
);

const triceps = new MuscleGroup(
  "Triceps",
  "triceps",
  "Upper",
  [
    { name: "Triceps Ex 1", slug: "TricepsEx1", image: Triceps },
    { name: "Triceps Ex 2", slug: "TricepsEx2", image: Triceps },
  ],
  Triceps
);

const forearms = new MuscleGroup(
  "Forearms",
  "forearms",
  "Upper",
  [
    { name: "Forearms Ex 1", slug: "ForearmsEx1", image: Forearms },
    { name: "Forearms Ex 2", slug: "ForearmsEx2", image: Forearms },
  ],
  Forearms
);

const glutes = new MuscleGroup(
  "Glutes",
  "glutes",
  "Lower",
  [
    { name: "Glutes Ex 1", slug: "GlutesEx1", image: Glutes },
    { name: "Glutes Ex 2", slug: "GlutesEx2", image: Glutes },
  ],
  Glutes
);

const quads = new MuscleGroup(
  "Quads",
  "quads",
  "Lower",
  [
    { name: "Quads Ex 1", slug: "QuadsEx1", image: Quads },
    { name: "Quads Ex 2", slug: "QuadsEx2", image: Quads },
  ],
  Quads
);

const hamstrings = new MuscleGroup(
  "Hamstrings",
  "hamstrings",
  "Lower",
  [
    { name: "Hamstrings Ex 1", slug: "HamstringsEx1", image: Hamstrings },
    { name: "Hamstrings Ex 2", slug: "HamstringsEx2", image: Hamstrings },
  ],
  Hamstrings
);

const calves = new MuscleGroup(
  "Calves",
  "calves",
  "Lower",
  [
    { name: "Calves Ex 1", slug: "CalvesEx1", image: Calves },
    { name: "Calves Ex 2", slug: "CalvesEx1", image: Calves },
  ],
  Calves
);

export const exercises = [
  neck,
  traps,
  shoulders,
  chest,
  abs,
  lats,
  middleBack,
  lowerBack,
  biceps,
  triceps,
  forearms,
  glutes,
  quads,
  hamstrings,
  calves,
];
