// components/SimpleMap/SimpleMap.tsx
import { useEffect, useRef } from 'react';

interface SimpleMapProps {
  center: [number, number];
  zoom?: number;
}

export const SimpleMap = ({ center, zoom = 13 }: SimpleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (mapInstance.current) return;

    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    script.async = true;
    
    script.onload = () => {
      // @ts-ignore - переделать, временно от ошибки ymaps
      ymaps.ready(() => {
        if (!mapRef.current || mapInstance.current) return;
        
        // Создаем карту
        // @ts-ignore - переделать, временно от ошибки ymaps
        mapInstance.current = new ymaps.Map(mapRef.current, {
          center: center,
          zoom: zoom,
        });

        // СОЗДАЕМ И ДОБАВЛЯЕМ МЕТКУ ПРАВИЛЬНО
        // @ts-ignore - переделать, временно от ошибки ymaps
        const placemark = new ymaps.Placemark(center, {
          balloonContent: 'Наш банк',
          hintContent: 'Наш банк' // Подсказка при наведении
        }, {
          preset: 'islands#redIcon',
          draggable: false // Не перемещаемая
        });
        // ДОБАВЛЯЕМ МЕТКУ НА КАРТУ
        mapInstance.current.geoObjects.add(placemark);
      });
    };

    document.head.appendChild(script);

    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy();
        mapInstance.current = null;
      }
    };
  }, [center, zoom]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
};