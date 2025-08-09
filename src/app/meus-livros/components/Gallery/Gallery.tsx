'use client'
import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";

import { artesRainha, artesNDI, artesMAV } from "./galeria";
import './Gallery.css'

export function ImgsRainha() {
  const [index, setIndex] = React.useState(-1);

  return (
    <>

      <RowsPhotoAlbum
        photos={artesRainha}
        targetRowHeight={300}
        spacing={20}
        padding={20}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={artesRainha}
        open={index >= 0}
        close={() => setIndex(-1)}

        plugins={[Thumbnails, Captions, Zoom]}
        
        thumbnails={ {

            position: "bottom",
            width: 100,
            height: 100,
            border: 0,
            borderRadius: 5,
            gap: 30,
            imageFit: "cover"
          }
        }

        captions={{
          descriptionTextAlign: "center",
          showToggle: true
        }}

      />

    </>
  );
}


export function ImgsNDI() {
  const [index, setIndex] = React.useState(-1);

  return (
    <>

      <RowsPhotoAlbum
        photos={artesNDI}
        rowConstraints={{ singleRowMaxHeight: 300}}
        spacing={20}
        padding={20}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={artesNDI}
        open={index >= 0}
        close={() => setIndex(-1)}

        plugins={[Thumbnails, Captions, Zoom]}

        thumbnails={ {

            position: "bottom",
            width: 100,
            height: 100,
            border: 0,
            borderRadius: 5,
            gap: 30,
            imageFit: "cover"
          }
        }

        captions={{
          descriptionTextAlign: "center",
          showToggle: true
        }}

      />

    </>
  );
}

export function ImgsMAV() {
  const [index, setIndex] = React.useState(-1);

  return (
    <>

      <RowsPhotoAlbum
        photos={artesMAV}
        rowConstraints={{ singleRowMaxHeight: 300}}
        spacing={20}
        padding={20}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={artesMAV}
        open={index >= 0}
        close={() => setIndex(-1)}

        plugins={[Thumbnails, Captions, Zoom]}

        thumbnails={ {

            position: "bottom",
            width: 100,
            height: 100,
            border: 0,
            borderRadius: 5,
            gap: 30,
            imageFit: "cover"
          }
        }
        
        captions={{
          descriptionTextAlign: "center",
          showToggle: true,
          hidden: true
        }}
        
      />

    </>
  );
}

