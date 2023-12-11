import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../components/components-ui/ui/accordion'

export default function Faq() {
    return (
        <Accordion
            className="max-w-2xl max-[426px]:text-center"
            type="single"
            collapsible
        >
            <AccordionItem value="item-1">
                <AccordionTrigger className="max-[390px]:text-sm">
                    1. O que é uma estadia espacial?
                </AccordionTrigger>
                <AccordionContent>
                    Uma estadia espacial oferece a oportunidade única de viver
                    temporariamente em um hotel espacial, experimentando a vida
                    em gravidade zero e desfrutando de vistas incríveis da
                    Terra.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="max-[390px]:text-sm">
                    2. Quais as opções de órbita?
                </AccordionTrigger>
                <AccordionContent>
                    As opções de órbita podem variar, mas geralmente incluem
                    diferentes altitudes e trajetórias ao redor da Terra e da
                    Lua. Oferecemos, órbita baixa, órbita média, órbita
                    elíptica(alta) e órbita geoestacionária.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="max-[390px]:text-sm">
                    3. De onde parte o transporte para hotel?
                </AccordionTrigger>
                <AccordionContent>
                    O transporte para o espaço parte de uma base localizada na
                    Flórida, Estados Unidos ou em Alcântra Brasil. Estas
                    localizações estratégicas permite lançamentos eficientes em
                    várias órbitas.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className="max-[390px]:text-sm">
                    4. Preciso de treinamento para ir?
                </AccordionTrigger>
                <AccordionContent>
                    Não. Você não precisa de um treinamento pra viajar para o
                    espaço, apenas de uma orientação que dura 10 minutos antes
                    dos tripulantes embarcarem.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger className="max-[390px]:text-sm">
                    5. Quais as atividades disponíveis?
                </AccordionTrigger>
                <AccordionContent>
                    Temos diversas atividades em gravidade 0 como: basquete e
                    futebol. Você também pode participar de experimentos.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
                <AccordionTrigger className="max-[390px]:text-sm">
                    6. Sou menor de idade, posso ir sozinho?
                </AccordionTrigger>
                <AccordionContent>
                    Não. Nosso regulamento permite apenas pessoas menores de 18
                    anos acompanhada com um responsável.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
                <AccordionTrigger className="max-[390px]:text-sm">
                    7. Existe naves para evacuação do hotel?
                </AccordionTrigger>
                <AccordionContent>
                    Sim, apesar de nossos hoteis ser robusto, seguro e moderno,
                    em caso emergencia contamos com transportes de evacuação.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
                <AccordionTrigger className="max-[390px]:text-sm">
                    8. Tudo do serviço é incluso?
                </AccordionTrigger>
                <AccordionContent>
                    Sim. Ao adiquirir a compra da viagem, tudo no hotel é
                    incluso, como, café da manhã, almoço, lanches, janta, bar e
                    diversões.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
                <AccordionTrigger className="max-[390px]:text-sm">
                    9. Posso cancelar a reserva?
                </AccordionTrigger>
                <AccordionContent>
                    Uma vez comprada o cliente não pode cancelar a viagem. Não
                    estornamos a sua viagem.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
                <AccordionTrigger className="max-[390px]:text-sm">
                    10. Tem restrição de saúde para viajar?
                </AccordionTrigger>
                <AccordionContent>
                    Quando o(a) senhor(a) estiver prestes a concluir a compra,
                    haverá uma etapa que você concorda que não tem problemas de
                    hipertensão, diabetes e problemas psicológicos a você e
                    acompanhates, caso haja problemas durante a viagem a HOTEIS
                    ORBITAIS não se responsábiliza.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
