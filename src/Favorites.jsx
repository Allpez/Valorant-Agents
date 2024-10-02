import React from 'react';

function FavoritesModal({ favorites, onClose, onRemoveFavorite }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded shadow-lg w-10/12 h-4/6">
                <h2 className="text-center font-bold mb-4 text-red-500 text-4xl">Favorites</h2>
                {favorites.length === 0 ? (
                    <p>No favorites yet.</p>
                ) : (
                    <div>
                        {favorites.map(a => (
                            <div key={a.id} className="flex justify-between items-center mb-2">
                                <img
                                    src={a.displayIcon}
                                    alt={a.displayName} 
                                    className="w-80 h-full transition-opacity duration-300 group-hover:opacity object-cover"
                                />
                                <span>{a.displayName}</span>
                                <button
                                    className="text-red-500 "
                                    onClick={() => onRemoveFavorite(a.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                <button className="fixed bottom-44 right-48 bg-red-500 text-white px-4 py-2 rounded" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default FavoritesModal;
