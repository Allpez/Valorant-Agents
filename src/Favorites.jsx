import React from 'react';

function FavoritesModal({ favorites, onClose, onRemoveFavorite }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded flex flex-col gap-6 justify-between m-8 shadow-lg w-10/12 h-4/6">
                <h2 className="text-center font-bold mb-4 text-red-500 text-5xl">Favorites</h2>
                <div className='flex flex-wrap justify-center mb-10'>
                    {favorites.length === 0 ? (
                        <p className='text-center text-red-500 text-2xl mb-40'>No favorites yet.</p>
                    ) : (
                        favorites.map(a => (
                            <div key={a.uuid} className="flex flex-col items-center mb-4 mx-2 border-2 border-red-900">
                                <img
                                    src={a.displayIcon}
                                    alt={a.displayName}
                                    className="w-55 h-40 transition-opacity duration-300 object-cover"
                                />
                                <span>{a.displayName}</span>
                                <button
                                    className="text-red-500"
                                    onClick={() => onRemoveFavorite(a.uuid)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <button className="fixed bottom-44 right-48 bg-red-500 text-white px-4 py-2 rounded" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default FavoritesModal;
