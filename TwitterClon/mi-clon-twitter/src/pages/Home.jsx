import TweetList from "../Components/TweetList";
import TweetForm from "../Components/TweetForm";
import { useEffect, useState } from "react";

const Home = ({ user, logout }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
    setTweets(storedTweets);
  }, []);

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      text,
      likes: 0,
    };
    setTweets([newTweet, ...tweets]);
  };

  const likeTweet = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  //if (!user) return <p>No estás autenticado</p>;

  return (
    <div>
      <h1>Bienvenido a Twitter</h1>
      <div>
        <p>Hola, {user.username}!</p>
        <button onClick={logout}>Cerrar sesión</button>
      </div>
      <TweetForm onAddTweet={addTweet} />
      <TweetList tweets={tweets} onLike={likeTweet} />
    </div>
  );
};

export default Home;
