/**
 * Lists all months of the year.
 */
export type Months = "January" | "Februrary" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";

export type ImageData = {
    src: string,
    alt: string,
    heading: string,
    description: string,
    aside?: {
        person: 'Brendan' | 'Krista',
        quote: string,
    },
    location: string,
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
    description: "For us, January was a time for us to set new goals through our New Year Bingo Cards. But for me in particular, it was a time to get fully aquainted with living in a new state away from family, and learning more about Krista and Alaia.",
    location: "Original Pancake House",
    heroImage: '/florida.jpg',
    images: [
      {
        src: "/January-Breakfast.jpg",
        alt: "January placeholder image",
        heading: "breakfast date!",
        description: "Original Pancake House is one of my favorite breakfast spots. It was awesome to see how it changes when you visit a different state that has one.",
        aside: {
          person: "Krista",
          quote: "Brendan eats his eggs with syrup. Weirdo."
        },
        location: "Original Pancake House"
      },
      {
        src: "/January-Golf.png",
        alt: "January placeholder image",
        heading: "Hole in One!",
        description: "Krista hasn't played golf in her life until this point. She's good for a beginner. (Don't tell her I said that).",
        aside: {
          person: "Brendan",
          quote: "No matter what she says, it wasn't even close."
        },
        location: "Glowing Greens Minigolf"
      },
      {
        src: "/January-Hat.jpg",
        alt: "January placeholder image",
        heading: "howdy partner",
        description: "Alaia flexes her expertise in fashion by taking after Beyonce. She'll grow into it.",
        location: "Washington Square Mall"
      },
      {
        src: "/January-Spiderman.jpg",
        alt: "January placeholder image",
        heading: "we don't make mistakes, just happy accidents",
        description: "We decided to have a at home date idea where we copy a youtube tutorial and see whose is better. You be the judge.",
        aside: {
          person: "Brendan",
          quote: "Spooderman."
        },
        location: "Krista's House"
      },
    ]
  },

  Februrary: {
    quote: "Small moments of warmth cut through the cold.",
    month: "Februrary",
    description: "Februrary leaned into connection and creativity.",
    location: "Downtown",
    heroImage: '/florida.jpg',
    images: [
      {
        src: "https://placehold.co/600x400",
        alt: "Februrary placeholder image",
        heading: "Shared Time",
        description: "Finding comfort in familiar places.",
        aside: {
          person: "Krista",
          quote: "Love shows up quietly."
        },
        location: "Downtown Cafe, FL"
      }
    ]
  },

  March: {
    heroImage: '/florida.jpg',
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
        },
        location: "Maple Street, FL"
      }
    ]
  },

  April: {
    heroImage: '/florida.jpg',
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
        },
        location: "Greenwood Park, FL"
      }
    ]
  },

  May: {
    heroImage: '/florida.jpg',
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
        },
        location: "Central Perk, FL"
      }
    ]
  },

  June: {
    heroImage: '/florida.jpg',
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
        },
        location: "Main Avenue, FL"
      }
    ]
  },

  July: {
    heroImage: '/florida.jpg',
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
        },
        location: "Skyline Rooftop, FL"
      }
    ]
  },

  August: {
    heroImage: '/florida.jpg',
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
        },
        location: "Home Backyard, FL"
      }
    ]
  },

  September: {
    heroImage: '/florida.jpg',
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
        },
        location: "Office Desk, FL"
      }
    ]
  },

  October: {
    heroImage: '/florida.jpg',
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
        },
        location: "Maple Lane, FL"
      }
    ]
  },

  November: {
    heroImage: '/florida.jpg',
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
        },
        location: "Grandma's House, FL"
      }
    ]
  },

  December: {
    heroImage: '/florida.jpg',
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
        },
        location: "Home Living Room, FL"
      }
    ]
  }
};
