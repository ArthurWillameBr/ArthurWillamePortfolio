import SectionTitle from "./section-title";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MoveRight } from "lucide-react";

const ContactForm = () => {
    return ( 
        <main id="contact" className="flex flex-col gap-6 justify-center items-center min-h-screen ">
            <div className="text-center">
                <SectionTitle title="Vamos trabalhar juntos? "/>
                <h3 className="text-2xl">Entre em contato</h3>
            </div>
            <form className="flex flex-col space-y-3 w-[320px]">
                <Input placeholder="Nome" />
                <Input placeholder="E-mail"/>
                <Textarea placeholder="Mensagem"/>
                <Button className="flex gap-1 items-center ">
                    Enviar mensagem
                    <MoveRight size={18}/>
                </Button>
            </form>
        </main>
     );
}
 
export default ContactForm;