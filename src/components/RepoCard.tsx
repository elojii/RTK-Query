import { useState } from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IRepo } from "../models/models";

export const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector((state) => state.github);
  const [isFav, setIsFav] = useState(favourites.some(f => (
    f.html_url === repo.html_url
  )));

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavourite(repo);
    setIsFav(true)
  };

  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavourite(repo);
    setIsFav(false)
  };

  return (
    <div className="border py-3 px-5 roundedmb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-large font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-small font-thin">{repo?.description}</p>

        {!isFav &&<button
          className="py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all"
          onClick={addToFavourite}
        >
          Add
        </button>}

        {isFav &&<button
          className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
          onClick={removeFromFavourite}
        >
          Remove
        </button>}
      </a>
    </div>
  );
};
