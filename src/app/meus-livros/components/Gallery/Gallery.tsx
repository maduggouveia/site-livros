'use client'
import * as React from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";

import './Gallery.css';

interface Arte {
  id: number;
  src: string;
  description: string;
  width: number;
  height: number;
}

function configurarArtes(artes: Arte[], setIndex: (i: number) => void) {
  return artes.map((arte, i) => (
    <Image
      key={arte.id}
      src={arte.src}
      alt={arte.description}
      width={arte.width}
      height={arte.height}
      className="artes-galeria"
      onClick={() => setIndex(i)}
    />
  ));
}

interface GaleriaProps {
  artes: Arte[];
}

function Galeria({ artes }: Readonly<GaleriaProps>) {
  const [index, setIndex] = React.useState(-1);

  return (
    <div className="card-galeria">
      {configurarArtes(artes, setIndex)}

      <Lightbox
        index={index}
        slides={artes}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Thumbnails, Captions, Zoom]}
        thumbnails={{
          position: "bottom",
          width: 100,
          height: 100,
          border: 0,
          borderRadius: 5,
          gap: 30,
          imageFit: "cover"
        }}
        captions={{
          descriptionTextAlign: "center",
          showToggle: true,
          hidden: true
        }}
      />
    </div>
  );
}

// Usa o componente genérico passando a lista correta
import { artesRainha, artesNDI, artesMAV } from "./galeria";

export function ImgsRainha() {
  return <Galeria artes={artesRainha} />;
}

export function ImgsNDI() {
  return <Galeria artes={artesNDI} />;
}

export function ImgsMAV() {
  return <Galeria artes={artesMAV} />;
}
