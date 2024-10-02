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
    const [favorites, setFavorites] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch("https://valorant-api.com/v1/agents?isPlayable=true")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then(data => setAgentesValorant(data.data || []))
            .catch(error => swal("Failed to fetch agents: " + error.message));
    }, []);

    const handleChangeText = value => setText(value);

    const addFavorite = agent => {
      console.log("Adding favorite:", agent); // Verifica qué agente se intenta añadir
      if (!favorites.some(fav => fav.id === agent.id)) {
          if (favorites.length < 5) {
              setFavorites([...favorites, agent]);
          } else {
              swal("You reached the maximum of 5 favorites! Please remove one to add a new one.", {
                  className: "bg-red-600",
              });
          }
      } else {
          swal("This agent is already in your favorites!", {
              className: "bg-yellow-600",
          });
      }
  };

    const removeFavorite = id => {
        setFavorites(favorites.filter(agent => agent.id !== id));
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
