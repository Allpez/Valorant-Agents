import Header from "./Header.jsx";
import "./App.css";
import { useEffect, useState } from "react";
import { ContainerCards } from "./ValorantCard.jsx";
import FavoritesModal from "./Favorites.jsx";
import swal from 'sweetalert';

function App() {
    const [text, setText] = useState("");
    const [selectedRole, setSelectedRole] = useState("");
    const [agentesValorant, setAgentesValorant] = useState([]);
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch("https://valorant-api.com/v1/agents?isPlayable=true")
            .then(res => {
                return res.json();
            })
            .then(data => setAgentesValorant(data.data || []))
            .catch(error => console.log("Failed to fetch agents"));
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const handleChangeText = value => setText(value);

    const addFavorite = agent => {
        if (!favorites.some(fav => fav.uuid === agent.uuid)) {
            if (favorites.length < 5) {
                setFavorites([...favorites, agent]);
            } else {
                swal("You reached the maximum of 5 favorites!", {
                    className: "bg-red-600",
                });
            }
        } 
    };

    const removeFavorite = uuid => {
        setFavorites(favorites.filter(agent => agent.uuid !== uuid));
    };

    const filteredAgentes = agentesValorant.filter(agent => {
        const matchesSearch = agent.displayName.toLowerCase().includes(text.toLowerCase());
        const matchesRole = selectedRole ? (agent.role && agent.role.displayName === selectedRole) : true;
        return matchesSearch && matchesRole;
    });

    return (
        <>
            <Header
                text={text}
                handleChangeText={handleChangeText}
                selectedRole={selectedRole}
                setSelectedRole={setSelectedRole}
            />
            <ContainerCards
                text={text}
                agentes={filteredAgentes}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                favorites={favorites}
            />
            {isModalOpen && (
                <FavoritesModal
                    favorites={favorites}
                    onClose={() => setIsModalOpen(false)}
                    onRemoveFavorite={removeFavorite}
                />
            )}
            <button
                className="fixed top-48 right-12 bg-red-500 text-white rounded-full p-3 shadow-lg"
                onClick={() => setIsModalOpen(true)}
            >
                ❤️
            </button>
        </>
    );
}

export default App;
