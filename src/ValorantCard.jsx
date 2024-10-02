import { useState } from "react";
import "./ValorantCard.css";

function ContainerCards({ text, agentes, addFavorite, removeFavorite, favorites }) {
    const agentesUnicos = {};
    
    const agentesFiltrados = agentes.filter((a) => {
        const nombre = a.displayName.toUpperCase();
        if (a.fullPortraitV2 && !agentesUnicos[nombre]) {
            agentesUnicos[nombre] = true;
            return true;
        }
        return false;
    });

    const agentesFinales = agentesFiltrados.filter((a) =>
        a.displayName.toUpperCase().includes(text.toUpperCase())
    );

    return (
        <div className="flex flex-wrap gap-6 justify-center m-8">
            {agentesFinales.map((o) => (
                <ValorantCard
                    key={o.uuid}
                    agent={o}
                    addFavorite={addFavorite}
                    removeFavorite={removeFavorite}
                    isInitiallyFavorite={favorites.some(fav => fav.uuid === o.uuid)}
                />
            ))}
        </div>
    );
}

function ValorantCard({ agent, addFavorite, removeFavorite, isInitiallyFavorite }) {
    const [isFavorite, setIsFavorite] = useState(isInitiallyFavorite);

    const handleClickFavorites = () => {
        if (isFavorite) {
            removeFavorite(agent.uuid);
        } else {
            addFavorite(agent);
        }
        setIsFavorite(!isFavorite);
    };

    
    return (
        <div className="relative group w-96 flex flex-col justify-between">
            <div className="relative gradient w-full h-5/6 rounded-t-full">
                <img
                    src={agent.fullPortrait}
                    alt={agent.displayName}
                    className="img-agent w-full cursor-pointer transition-opacity opacity-90 duration-300 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={handleClickFavorites}
                        className={`px-4 py-2 rounded-3xl font-bold w-40 transition-colors duration-300 ${
                            isFavorite
                                ? 'bg-yellow-400 text-red-950'
                                : 'bg-red-950 text-yellow-400'
                        }`}
                    >
                        {isFavorite ? "Remove Favorite" : "Add Favorite"}
                    </button>
                </div>
            </div>
            <div className="h-1/6 relative border-solid border-2 border-slate-300 bg-slate-200 pt-2 pb-6 pl-3 rounded-b-full">
                <h2 className="font-bold text-center text-red-500 text-2xl">{agent.displayName.toUpperCase()}</h2>
                <h3 className="font-bold text-center">{agent.role.displayName}</h3>
            </div>
        </div>
    );
}

export { ContainerCards, ValorantCard };