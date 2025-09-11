import { useMemo } from "react";

export default function Shimmer1() {
 const quotes = [
  "Good food is good mood 🍔",
  "Eat today, live another day 🍕",
  "Life is short, eat dessert first 🍩",
  "Food is the ingredient that binds us together 🍲",
  "You can’t live a full life on an empty stomach 🥗",
  "Happiness is homemade 🍜",
  "Eat well, travel often 🌮",
  "There is no sincerer love than the love of food ❤️",
  "Let food be thy medicine and medicine be thy food 🌿",
  "A healthy outside starts from the inside 🥦",
  "Nutrition is not just eating, it’s a lifestyle 🍏",
  "Eat better, not less 🥑",
  "Real food doesn’t have ingredients, it is ingredients 🍎",
  "The first wealth is health 🌱",
  "Take care of your body, it’s the only place you have to live 🧘",
  "Eat to fuel your body, not to feed your emotions 💪",
  "Healthy food = Healthy mood 🥒",
  "Good nutrition creates health in all areas of life 🌼",
  "Every time you eat is an opportunity to nourish your body 🥗",
  "Don’t count calories, make calories count 🍇",
  "Strong roots create healthy fruits 🍊",
  "Eat colorful, live colorful 🌈🥕",
  "Balance is not something you find, it’s something you create ⚖️",
  "Fresh food, fresh mind 🥬",
  "Your future depends on the choices you make today 🍓"
];


  // Pick a random quote once when component renders
  const quote = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }, []);

  return (

    <div className="flex flex-col items-center justify-center min-h-screen space-y-8  ">
            
            {/* Quote Section */}
            <div className="w-full max-w-xl h-24 mt-8 flex items-center justify-center relative overflow-hidden rounded-xl bg-gray-100">
              <p className="text-lg font-semibold text-gray-600 z-10 px-4 text-center">
                {quote}
              </p>
            </div>

            {/* Loader Spinner */}
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
            </div>

    </div>

  )
}
