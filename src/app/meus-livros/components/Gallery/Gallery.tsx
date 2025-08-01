import Image from "next/image"

const photos = [
    {
        id: 1,
        src: '/imgs/placeholder.png',
        alt: 'Placeholder Image 1'
    },
    {
        id: 2,
        src: '/imgs/placeholder.png',
        alt: 'Placeholder Image 2'
    },
    {
        id: 3,
        src: '/imgs/placeholder.png',
        alt: 'Placeholder Image 3'
    }
]

const Gallery = photos.map((photo => (
    <Image key={photo.id} src={photo.src} alt={photo.alt} width={200} height={200} />
)))


export function TesteGaleria() {

    // console.log(Gallery)

    return (

        <div className="gallery">
            {Gallery}
        </div>

    )

}
