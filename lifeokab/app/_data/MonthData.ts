
/**
 * Lists all months of the year.
 */
export type Months = "January" | "Februrary" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";

export type ImageData = {
    src: string,
    alt: string,
    heading: string,
    description: string,
    aside: {
        person: 'Brendan' | 'Krista',
        quote: string,
    }
}

export interface MonthData {
    quote: string,
    month: Months,
    description: string,
    location: string,
    heroImage: string,
    images: ImageData[],
}


export const monthData: Record<Months, MonthData> = {
  January: {
    quote: "A quiet beginning sets the tone for the year.",
    month: "January",
    description: "January focused on rest, reflection, and setting intentions.",
    location: "Brendan's House",
    heroImage: '/florida.jpg',
    images: [
      {
        src: "/florida.jpg",
        alt: "January placeholder image",
        heading: "Fresh Start",
        description: "A calm moment to reset and plan.",
        aside: {
          person: "Brendan",
          quote: "Every year starts with a breath."
        }
      },
      {
        src: "16bit.jpg",
        alt: "January placeholder image",
        heading: "gamers unite. i think?",
        description: "A calm moment to reset and plan.",
        aside: {
          person: "Brendan",
          quote: "Every year starts with a breath."
        }
      },
      {
        src: "/graduation.jpg",
        alt: "January placeholder image",
        heading: "Fresh Start",
        description: "A calm moment to reset and plan.",
        aside: {
          person: "Brendan",
          quote: "Every year starts with a breath."
        }
      },
      {
        src: "/florida.jpg",
        alt: "January placeholder image",
        heading: "Fresh Start",
        description: "A calm moment to reset and plan.",
        aside: {
          person: "Brendan",
          quote: "Every year starts with a breath."
        }
      },
    ]
  },

  Februrary: {
    quote: "Small moments of warmth cut through the cold.",
    month: "Februrary",
    description: "Februrary leaned into connection and creativity.",
    location: "Downtown",
    images: [
      {
        src: "https://placehold.co/600x400",
        alt: "Februrary placeholder image",
        heading: "Shared Time",
        description: "Finding comfort in familiar places.",
        aside: {
          person: "Krista",
          quote: "Love shows up quietly."
        }
      }
    ]
  },

  March: {
    quote: "Momentum begins to build.",
    month: "March",
    description: "March brought renewed energy and forward motion.",
    location: "Neighborhood Walk",
    images: [
      {
        src: "https://placehold.co/600x400",
        alt: "March placeholder image",
        heading: "Early Growth",
        description: "Signs of progress everywhere.",
        aside: {
          person: "Brendan",
          quote: "Movement creates clarity."
        }
      }
    ]
  },

  April: {
    quote: "Change feels lighter when shared.",
    month: "April",
    description: "April was about adjustment and optimism.",
    location: "Local Park",
    images: [
      {
        src: "https://placehold.co/600x400",
        alt: "April placeholder image",
        heading: "Open Air",
        description: "Letting plans breathe.",
        aside: {
          person: "Krista",
          quote: "Not everything needs a plan."
        }
      }
    ]
  },

  May: {
    quote: "Joy hides in the details.",
    month: "May",
    description: "May focused on appreciation and slowing down.",
    location: "Coffee Shop",
    images: [
      {
        src: "https://placehold.co/600x400",
        alt: "May placeholder image",
        heading: "Everyday Moments",
        description: "Finding meaning in routine.",
        aside: {
          person: "Brendan",
          quote: "This is enough."
        }
      }
    ]
  },

  June: {
    quote: "Summer opens new doors.",
    month: "June",
    description: "June marked a shift toward exploration and warmth.",
    location: "City Streets",
    images: [
      {
        src: "https://placehold.co/600x400",
        alt: "June placeholder image",
        heading: "Long Days",
        description: "Time stretches differently now.",
        aside: {
          person: "Krista",
          quote: "Let the day linger."
        }
      }
    ]
  },

  July: {
    quote: "Freedom feels louder in the sun.",
    month: "July",
    description: "July was expressive, bold, and energetic.",
    location: "Rooftop",
    images: [
      {
        src: "https://placehold.co/600x400",
        alt: "July placeholder image",
        heading: "High Spirits",
        description: "Moments that feel endless.",
        aside: {
          person: "Brendan",
          quote: "Be where you are."
        }
      }
    ]
  },

  August: {
    quote: "Stillness before the shift.",
    month: "August",
    description: "August carried a reflective and grounded tone.",
    location: "Backyard",
    images: [
      {
        src: "https://placehold.co/600x400",
        alt: "August placeholder image",
        heading: "Golden Hours",
        description: "Holding onto what remains.",
        aside: {
          person: "Krista",
          quote: "Pause while you can."
        }
      }
    ]
  },

  September: {
    quote: "Focus returns with clarity.",
    month: "September",
    description: "September emphasized structure and intention.",
    location: "Workspace",
    images: [
      {
        src: "https://placehold.co/600x400",
        alt: "September placeholder image",
        heading: "Refocus",
        description: "Sharpening priorities.",
        aside: {
          person: "Brendan",
          quote: "Start where you are."
        }
      }
    ]
  },

  October: {
    quote: "Depth replaces speed.",
    month: "October",
    description: "October leaned into thoughtfulness and mood.",
    location: "Evening Walk",
    images: [
      {
        src: "https://placehold.co/600x400",
        alt: "October placeholder image",
        heading: "Changing Colors",
        description: "Letting layers fall away.",
        aside: {
          person: "Krista",
          quote: "There’s beauty in change."
        }
      }
    ]
  },

  November: {
    quote: "Gratitude reframes everything.",
    month: "November",
    description: "November centered around appreciation and presence.",
    location: "Family Home",
    images: [
      {
        src: "https://placehold.co/600x400",
        alt: "November placeholder image",
        heading: "Gathering",
        description: "Moments worth holding onto.",
        aside: {
          person: "Brendan",
          quote: "Thankful, always."
        }
      }
    ]
  },

  December: {
    quote: "Endings make space for beginnings.",
    month: "December",
    description: "December closed the year with reflection and warmth.",
    location: "Living Room",
    images: [
      {
        src: "https://placehold.co/600x400",
        alt: "December placeholder image",
        heading: "Year’s End",
        description: "Looking back with clarity.",
        aside: {
          person: "Krista",
          quote: "We made it."
        }
      }
    ]
  }
};
