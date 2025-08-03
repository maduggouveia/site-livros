'use client'
import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { RowsPhotoAlbum, MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { artesRainha } from "./galeria";
import './Gallery.css'

export function TesteGaleria() {
  const [index, setIndex] = React.useState(-1);

  return (
    <>

      <RowsPhotoAlbum
        photos={artesRainha}
        onClick={({ index: current }) => setIndex(current)}
      />

      {/* <MasonryPhotoAlbum
        photos={artesRainha}
        
      /> */}

      <Lightbox
        index={index}
        slides={artesRainha}
        open={index >= 0}
        close={() => setIndex(-1)}

        plugins={[Thumbnails, Zoom]}
      />

    </>
  );
}

