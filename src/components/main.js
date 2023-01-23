import React from "react";

export default function Main() {
  //data
  const [allMemeData, setAllMemeData] = React.useState([]);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    imgUrl: "https://i.imgflip.com/30b1gx.jpg",
  });

  // will run only one time, takeout data from API call.
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeData(data.data.memes));
  }, []);

  // this function will update the memedata each time user input.
  function handleChange(event) {
    setMeme((predata) => ({
      ...predata,
      [event.target.name]: event.target.value,
    }));
  }

  // change the meme with random img
  function changeMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeData.length);
    const url = allMemeData[randomNumber].url;
    setMeme(function (preMeme) {
      return {
        ...preMeme,
        imgUrl: url,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <div className="button--div">
          <input
            className="button--text"
            placeholder="First Text"
            onChange={handleChange}
            name="topText"
            value={meme.topText}
          />
          <input
            className="button--text"
            placeholder="Second Text "
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
          />
        </div>
        <button className="button--submit" onClick={changeMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>

      <div className="meme">
        <img src={meme.imgUrl} className="meme_image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
