import React, { useCallback, useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useTranslation } from "react-i18next";
import Skeleton from "@/components/atom/Skeleton";

interface Props {
  lng: number;
  lat: number;
  width?: string;
  height?: string;
}

function FixedMap({ lng, lat, width = "100%", height = "400px" }: Props) {
  const currentLanguage = useTranslation().i18n.language;

  const googleAPIKey = process.env.NEXT_PUBLIC_GOOGLE_SECREET_KEY;

  const center = { lat, lng };

  const containerStyle = {
    width,
    height,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleAPIKey ? googleAPIKey : "",
    language: currentLanguage,
    libraries: ["places"],
  });

  const [service, setService] = useState();
  const [map, setMap] = useState<null | google.maps.Map>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          disableDefaultUI: true,
          disableDoubleClickZoom: true,
          gestureHandling: "none",
          zoomControl: false,
        }}
      >
        <Marker position={center} visible={true}></Marker>
      </GoogleMap>
  ) : (
    <Skeleton {...containerStyle}></Skeleton>
  );
}

export default React.memo(FixedMap);
