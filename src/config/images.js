// Balu Photography - Premium Visual Asset Configuration
// Centralized image mapping for your actual 15 high-resolution photography assets.

import img3444 from '../assets/PRPG3444.jpg';
import img3458 from '../assets/PRPG3458.jpg';
import img3471 from '../assets/PRPG3471.jpg';
import img3566 from '../assets/PRPG3566.jpg';
import img3567 from '../assets/PRPG3567.jpg';
import img3634 from '../assets/PRPG3634.jpg';
import img3636 from '../assets/PRPG3636.jpg';
import img3682 from '../assets/PRPG3682.jpg';
import img3789 from '../assets/PRPG3789.jpg';
import img3817 from '../assets/PRPG3817.jpg';
import img3041 from '../assets/SMD_3041.jpg';
import img3082 from '../assets/SMD_3082.jpg';
import img3096 from '../assets/SMD_3096.jpg';
import img3106 from '../assets/SMD_3106.jpg';

export const portfolioImages = {
  // 1. Flagship Fullscreen Hero Image
  hero: {
    url: img3444,
    title: "Balu Photography",
    tagline: "Capturing Emotions Beyond Time",
    description: "Every Frame Tells a Story"
  },

  // 2. Featured Cinematic Showcase (Apple-Style Parallax Scroll Slides)
  showcase: [
    {
      url: img3444,
      title: "The Silent Symphony",
      subtitle: "Cinematic Highlight",
      description: "A timeless couple gaze suspended in rich color-graded warm light."
    },
    {
      url: img3817,
      title: "Archival Reflections",
      subtitle: "Parallax Masterpiece",
      description: "Playing with subtle ambient flares, deep matte contrast, and high editorial sharpness."
    }
  ],

  // 3. Categorized Portfolio Grid Elements
  gallery: [
    // --- Wedding Section (4 emotional images) ---
    {
      id: "wedding-1",
      category: "wedding",
      url: img3458,
      title: "Intimate Glances",
      caption: "Candid closeup capture of deep emotional connections."
    },
    {
      id: "wedding-2",
      category: "wedding",
      url: img3471,
      title: "Timeless Vows",
      caption: "Spontaneous smiles and warm ambient light."
    },
    {
      id: "wedding-3",
      category: "wedding",
      url: img3566,
      title: "The Sacred Promise",
      caption: "A quiet moment of traditional couple embrace."
    },
    {
      id: "wedding-4",
      category: "wedding",
      url: img3567,
      title: "Ethereal Graces",
      caption: "Bridal portrait showcasing high-contrast luxury shadows."
    },

    // --- Portrait Section (3 luxury editorial images) ---
    {
      id: "portrait-1",
      category: "portrait",
      url: img3041,
      title: "Sleek Contrast",
      caption: "Clean editorial framing capturing soft cinematic shadows."
    },
    {
      id: "portrait-2",
      category: "portrait",
      url: img3082,
      title: "The Storyteller",
      caption: "Editorial studio close-up lit with soft silver highlights."
    },
    {
      id: "portrait-3",
      category: "portrait",
      url: img3096,
      title: "Refined Shadows",
      caption: "Timeless portrait playing with deep matte-black tones."
    },

    // --- Outdoor / Cinematic Section (3 wide layouts) ---
    {
      id: "cinematic-1",
      category: "cinematic",
      url: img3817,
      title: "Timeless Shadows",
      caption: "A magnificent cinematic capture of soft ambient textures and forms."
    },
    {
      id: "cinematic-2",
      category: "cinematic",
      url: img3634,
      title: "Nature's Sanctuary",
      caption: "A wide outdoor couple narrative during golden sunset hour."
    },
    {
      id: "cinematic-3",
      category: "cinematic",
      url: img3636,
      title: "The Whispering Wilds",
      caption: "Archival landscape storytelling framing frozen in time."
    },

    // --- Traditional / Event Section (3 vibrant cultural event images) ---
    {
      id: "traditional-1",
      category: "traditional",
      url: img3106,
      title: "Cultural Haldi",
      caption: "Preserving vibrant traditional colors and ecstatic family joy."
    },
    {
      id: "traditional-2",
      category: "traditional",
      url: img3682,
      title: "Sangeet Sparkles",
      caption: "Dazzling high-motion festive rituals captured in dramatic focus."
    },
    {
      id: "traditional-3",
      category: "traditional",
      url: img3789,
      title: "Sacred Fire",
      caption: "Archival documentation of traditional Indian ritual moments."
    }
  ]
};

export default portfolioImages;
