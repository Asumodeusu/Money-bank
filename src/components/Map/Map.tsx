import { useEffect, useRef } from "react";
import type * as YMaps from "yandex-maps";

interface SimpleMapProps {
  center: [number, number];
  zoom?: number;
}

export const SimpleMap = ({ center, zoom = 13 }: SimpleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<YMaps.Map | null>(null);

  useEffect(() => {
    if (mapInstance.current) return;

    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
    script.async = true;

    script.onload = () => {
      const ymaps = window.ymaps as unknown as typeof YMaps;

      ymaps.ready(() => {
        if (!mapRef.current || mapInstance.current) return;

        mapInstance.current = new ymaps.Map(mapRef.current, {
          center: center,
          zoom: zoom,
        });

        const placemark = new ymaps.Placemark(
          center,
          {
            balloonContent: "Наш банк",
            hintContent: "Наш банк",
          },
          {
            preset: "islands#redIcon",
            draggable: false,
          }
        );

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

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
};
