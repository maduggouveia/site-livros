import { Bookslist } from "./components/Bookslist/Bookslist";
import { ImgsMAV, ImgsNDI, ImgsRainha } from "./components/Gallery/Gallery";

export default function Bookspage() {
  return (

    <div className="booklist-box">

      <h1>Meus livros</h1>

        <Bookslist />

        {/* <ImgsRainha />
        <ImgsNDI />
        <ImgsMAV /> */}

    </div>

  );
}