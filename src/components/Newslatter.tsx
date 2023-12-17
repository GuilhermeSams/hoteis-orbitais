import Image from 'next/image'
import { Input } from '../components/components-ui/ui/input'
import { Button } from '../components/components-ui/ui/button'
import icone_email from '../../public/icone-email.png'
import { InterFont } from '../lib/fonts'

export default function Newslatter() {
    return (
        <div
            className={`${InterFont.className} mx-40 text-center max-[832px]:mx-5 max-[750px]:mt-72`}
        >
            <div>
                <h1 className="mb-10 bg-white text-2xl font-extrabold text-[#2D3648] max-[555px]:text-xl ">
                    INSCREVA-SE NO NOSSO
                    <br />
                    NEWSLATTER
                </h1>
            </div>
            <div className="relative flex w-full flex-col items-center justify-center rounded-[8px] border-2 border-[#2D3648] bg-[#717D96] py-20">
                <div className="space-y-6">
                    <div className="flex items-center justify-center">
                        <Image
                            className="absolute left-[50%] right-[50%] translate-x-[-50%] translate-y-[-140%] transform rounded-full  bg-[#2D3648] p-2"
                            alt="icone email"
                            src={icone_email}
                            priority={true}
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                    <h2 className="text-2xl text-white max-[555px]:text-xl">
                        Receba noticias semanais
                    </h2>
                    <div>
                        <form className="mx-4 flex ">
                            <Input
                                placeholder="Seu endereço de email"
                                className="rounded-r-none"
                            />
                            <Button className="rounded-l-none">
                                Inscreva-se
                            </Button>
                        </form>
                    </div>
                    <p className="mx-4 font-light text-gray-200">
                        seu e-mail está seguro conosco, não enviamos spam
                    </p>
                </div>
            </div>
        </div>
    )
}
