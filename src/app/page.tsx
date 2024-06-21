import Header from "@/components/header";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

const Home = () => {
  return (
      <main className="space-y-20 container">
        <Header /> 
        <Profile />
        <Skills />
        <Projects />
      </main>
  );
};

export default Home;
