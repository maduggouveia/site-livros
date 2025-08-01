'use client'
import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { artes } from "./galeria";

export function TesteGaleria() {
  const [index, setIndex] = React.useState(-1);

  return (
    <>

      <RowsPhotoAlbum
        photos={artes}
        targetRowHeight={150}
        spacing={50}
        onClick={({ index: current }) => setIndex(current)}

      />

      <Lightbox
        index={index}
        slides={artes}
        open={index >= 0}
        close={() => setIndex(-1)}

        plugins={[Thumbnails, Zoom]}
      />
    </>
  );
}
