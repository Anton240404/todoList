import React, { useEffect, useState } from 'react';

type Photo = {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

export const Photos = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        // mount
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
            .then((response) => response.json())
            .then((data: Photo[]) => setPhotos(data))
            .catch((error) => console.error('Ошибка:', error));

        // unmount - запросить у чата пару примеров unmount
        return () => {
            console.log('Эта функция вызывается, когда компонент удалился');
        };
    }, []);

    const deletePhoto = (id: number) => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setPhotos(photos.filter((photo) => photo.id !== id));
            })
            .catch((error) => console.error('Ошибка удаления:', error));
    };

    return (
        <div>
            <h1>Фотографии</h1>
            <div>
                {photos.length === 0 ? (
                    <p>Загрузка фотографий...</p>
                ) : (
                    photos.map((photo) => (
                        <div key={photo.id}>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                            <p>{photo.title}</p>
                            <button onClick={() => deletePhoto(photo.id)}>
                                Удалить
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
