import { useState, useEffect } from "react";
import axios from "axios";

const UNSPLASH_ACCESS_KEY = "7xMS8uvw8du3-t6zBZvhSPLFIzF6AwxkjA_bS6kPvjA"; // Replace with your actual key

const useUnsplash = (query) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
                  query: query || "product",
                  per_page: 10,
            },
            headers: {
              Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
            },
          }
        );

        if (response.data.results.length > 0) {
            const randomIndex = Math.floor(Math.random() * response.data.results.length);
            console.log(response.data.results[randomIndex].urls.regular)

          setImageUrl(response.data.results[randomIndex].urls.regular);
        } else {
            setImageUrl("/fallback-image.jpg");
        }
      } catch (error) {
        console.error("Unsplash API Error:", error);
          setImageUrl("/fallback-image.jpg");
      }
    };

    if (query) {
      fetchImage();
    }
  }, [query]);

  return imageUrl;
};

export default useUnsplash;
