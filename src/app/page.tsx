import BackToTop from "@/components/back-to-top";
import ContactForm from "@/components/contact-form";
import Header from "@/components/header";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

const Home = () => {
  return (
      <main className="flex flex-col justify-center mx-auto min-h-screen px-3 w-full max-w-[1600px]">
        <Header /> 
        <Profile />
        <Skills />
        <Projects />
        <ContactForm/>
        <BackToTop/>
      </main>
  );
};

export default Home;
