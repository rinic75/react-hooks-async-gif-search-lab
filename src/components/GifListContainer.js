import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([])
  const [query, setQuery] = useState("dolphins")


  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=KlPYYQ3EPvTfjQL4kU0PVNDFsBoaN065`
    )
      .then((r) => r.json())
      .then(({data}) => {
        const newGifs = data.map(gif => gif.images.original.url)
        setGifs(newGifs)
      })
      
  },[query])

  return (
    <div>
      <GifList gifs={gifs}/>
      <GifSearch onSubmitQuery={setQuery}/>
    </div>
  )
}

export default GifListContainer