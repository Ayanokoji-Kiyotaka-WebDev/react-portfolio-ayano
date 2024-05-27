import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Tech from "./components/Tech"
import Experience from "./components/Experience"
import Project from "./components/Project"
import Content from "./components/Content"





function App() {
  return (
<div className="overflow-x-hidden text-neutral-500 antialiased selection: bg-neutral-950 selection:text-violet-700">
<div className="fixed top-0 -z-10 h-full w-full">
<div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

</div>
<div className="container mx-auto px-8">
<Nav/>
<Hero/>
<About/>
<Tech/>
  <Experience/>
  <Project/>
  <Content/>
</div>    
</div>
  )
}

export default App