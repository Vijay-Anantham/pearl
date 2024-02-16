import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = async () => {
    try {
      const response = await fetch('YOUR_FIREBASE_FUNCTION_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: getNoButtonText(),
        }),
      });
  
      setYesPressed(true);
      if (response.ok) {
        console.log("notified")
      } else {
        console.log("Got errors")
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };  

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Hi nanaa..",
      "Really sure?",
      "hey dancer plss!",
      "Have a heart!",
      "unaku pidicha cheescake!",
      "Hot chocolate kudikalaam!",
      "shopping polaam..!",
      "bike ride polaam..?",
      "Barbeque nation polaam..",
      "Give it another thought!",
      "This could be a mistake!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img 
            className="yaay"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmx4MnU4eTF6d2ZyMnoyc2tncTgwdjRreTY1cmVmMWV0NDBlYXc1dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hjhdkfALrw3aUpFfS0/giphy.gif" 
          />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Okii polamee 🙈!!!
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzNjZ3V0a202ajdleGdid295aXl4eXExdWxzdm90ZjRjbHhtMm1ybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1msDUtCpBk1BihoOGD/giphy.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Shall we go out to some cute place?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => handleYesClick}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};


