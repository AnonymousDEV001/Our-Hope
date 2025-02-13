"use client";
import { useState, useEffect } from "react";

const Map = ({ apiKey }) => {
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Try getting exact location first
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        },
        () => {
          // If permission denied, fallback to IP-based location
          fetch(`https://ipinfo.io/json?token=${apiKey}`)
            .then((res) => res.json())
            .then((data) => {
              if (data.loc) {
                const [lat, lng] = data.loc.split(",")?.map(Number); // Extract lat/lng
                setCoords({ lat, lng });
              } else {
                setError("Failed to get location.");
              }
              setLoading(false);
            })
            .catch(() => {
              setError("Failed to get location.");
              setLoading(false);
            });
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

  if (loading) return <p>Loading location...</p>;
  if (error) return <p>{error}</p>;

  // Construct Google Maps Embed URL with detected coordinates
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d106341.87750577148!2d${coords.lng}!3d${coords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sblood%20banks!5e0!3m2!1sen!2s!4v1739379235325`;

  return (
    <div className="">
      <h2 className="text-xl font-bold mb-4">Blood Banks Near You</h2>

      <iframe
        className="w-full h-[40rem] mt-4 border rounded"
        src={mapSrc}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
