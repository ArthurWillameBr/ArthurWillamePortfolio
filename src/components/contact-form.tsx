"use client";

import SectionTitle from "./section-title";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MoveRight } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import axios from "axios";
import { Toaster } from "./ui/toaster";
import { useToast } from "./ui/use-toast";


const ContactFormSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  message: z.string().nonempty(),
});

type ContactFormValues = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
  });

  const showSuccessToast = () => {
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Em breve entrarei em contato com você.",
    });
  }

  const onSubmitMessage = async ({email, message, name}: ContactFormValues) => {
    try {
      await axios.post("/api/contact", {email, message, name});
      showSuccessToast()
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const { toast } = useToast()

  return (
    <main
      id="contact"
      className="flex flex-col gap-6 justify-center items-center min-h-screen "
    >
      <div className="text-center">
        <SectionTitle title="Vamos trabalhar juntos? " />
        <motion.h3
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-2xl"
        >
          Entre em contato
        </motion.h3>
      </div>
      <motion.form
        onSubmit={handleSubmit(onSubmitMessage)}
        className="flex flex-col space-y-3 w-[320px] "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <Input placeholder="Nome" {...register("name")} />
        <Input placeholder="E-mail" {...register("email")} />
        <Textarea placeholder="Mensagem" {...register("message")} />
        <Button
          type="submit"
          className="flex gap-1 items-center"
          disabled={isSubmitting}
        >
          Enviar mensagem
          <MoveRight size={18} />
        </Button>
      </motion.form>

      <Toaster />
    </main>
  );
};

export default ContactForm;
