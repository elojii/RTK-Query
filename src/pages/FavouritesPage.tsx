import { useAppSelector } from "../hooks/redux";

export const FavouritesPage = () => {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) return <p className="text-center">No items.</p>;
  return (
    <div className="border py-3 px-5 roundedmb-2">
      {favourites.map((f) => (
        <div key={f.id} className=" hover:bg-gray-500 hover:text-white hover:shadow-md transition-all">
          <a href={f.html_url} target="_blank">
            <h2 className="text-large font-bold">{f.full_name}</h2>
            <p className="text-sm">
              Forks: <span className="font-bold">{f.forks}</span>
              Watchers: <span className="font-bold">{f.watchers}</span>
            </p>
            <p className="text-small font-thin">{f?.description}</p>
          </a>
        </div>
      ))}
    </div>
  );
};
