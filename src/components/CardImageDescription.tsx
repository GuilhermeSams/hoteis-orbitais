import Image, { type StaticImageData } from 'next/image'

type infoCard = {
    src: string | StaticImageData
    alt: string
    text: string
}

export default function CardImageDescription(props: infoCard) {
    return (
        <div className="mt-8 w-[150px] rounded-lg border-[1px] border-[#2D3648] bg-white shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            <Image
                alt={props.alt}
                src={props.src}
                className="rounded-t-lg border-b-[1px] border-[#2D3648] bg-[#EDF0F7]"
                priority={true}
                style={{
                    objectFit: 'contain',
                }}
            />
            <p className="color-[#2D3648] px-2 py-5 text-center font-bold leading-4">
                {props.text}
            </p>
        </div>
    )
}
