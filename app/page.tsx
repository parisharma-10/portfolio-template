"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (

<motion.main
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:1}}
className="relative bg-[#F0F4F6] text-gray-800"
>

{/* Background image */}

<div
className="absolute inset-0 opacity-10 pointer-events-none"
style={{
backgroundImage: "url('/medical-symbol.png')",
backgroundRepeat: "no-repeat",
backgroundPosition: "center 47%",
backgroundSize: "700px"
}}
></div>


{/* NAVBAR */}

<nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">

<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

<h1 className="font-semibold text-lg">
Dr. [Name]
</h1>

<div className="flex gap-6 text-sm">

<a href="#about" className="hover:text-teal-600">About</a>
<a href="#experience" className="hover:text-teal-600">Experience</a>
<a href="#research" className="hover:text-teal-600">Research</a>
<a href="#certifications" className="hover:text-teal-600">Certifications</a>
<a href="#contact" className="hover:text-teal-600">Contact</a>

</div>

</div>

</nav>


{/* HERO */}

<section className="h-screen flex items-center justify-center px-10 bg-gradient-to-b from-[#F7FAFB] to-[#E9F2F4]">

<div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl w-full">

{/* TEXT */}

<div>

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-5xl font-bold mb-4"
>
Dr. [Name]
</motion.h1>

<p className="text-xl mb-4">
Medical Professional • Public Health Advocate • Researcher
</p>

<p className="text-gray-600">
Portfolio showcasing professional experience, research contributions,
community outreach programs and healthcare initiatives.
</p>

</div>


{/* HERO PHOTO */}

<div className="flex flex-col gap-6">

<img
src="/image/sample-photo.jpeg"
alt="Professional portrait"
className="w-full h-[260px] object-cover rounded-xl shadow-lg"
/>

</div>

</div>

</section>



{/* ABOUT */}

<motion.section id="about"
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
className="py-24 px-10 max-w-5xl mx-auto"
>

<h2 className="text-3xl font-semibold mb-8 text-center">
About
</h2>

<div className="grid md:grid-cols-2 gap-12 items-center">

<div className="w-full h-[350px] bg-gray-200 rounded-xl flex items-center justify-center">

<img
src="/image/sample-portrait.jpeg"
alt="Professional portrait"
className="w-full h-full object-cover rounded-xl"
/>

</div>


<div>

<p className="mb-6">
Dr. [Name] is a healthcare professional dedicated to improving public
health awareness and expanding access to preventive care through
research, community programs and healthcare initiatives.
</p>

<a 
href="#"
target="_blank"
className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
>
Professional Profile
</a>

</div>

</div>

</motion.section>



{/* IMPACT */}

<motion.section
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
className="py-24 bg-[#A9C6C9]"
>

<div className="max-w-6xl mx-auto px-10 text-center">

<div className="grid md:grid-cols-3 gap-10">

<div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">

<h3 className="text-4xl font-bold text-teal-700">
[Metric]
</h3>

<p className="mt-2 text-gray-600">
People reached through healthcare initiatives
</p>

</div>

<div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">

<h3 className="text-4xl font-bold text-teal-700">
[Metric]
</h3>

<p className="mt-2 text-gray-600">
Healthcare programs led
</p>

</div>

<div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">

<h3 className="text-4xl font-bold text-teal-700">
[Metric]
</h3>

<p className="mt-2 text-gray-600">
Community outreach programs
</p>

</div>

</div>

</div>

</motion.section>



{/* EXPERIENCE */}

<motion.section id="experience"
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
className="py-24 px-10 max-w-6xl mx-auto"
>

<h2 className="text-3xl text-center mb-20">
Professional Experience
</h2>

<p className="text-center text-gray-600">
Timeline of professional roles and leadership experience in healthcare.
</p>

</motion.section>



{/* RESEARCH */}

<motion.section id="research"
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
className="py-24 bg-[#CDD4DA] px-10"
>

<div className="max-w-6xl mx-auto">

<h3 className="text-xl font-semibold">
Research Project Title
</h3>

<p className="text-gray-600 mt-2">
Description of research project, methodology, and outcomes related
to healthcare studies or clinical research.
</p>

</div>

</motion.section>



{/* CERTIFICATIONS */}

<motion.section id="certifications"
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
className="py-24 px-10"
>

<div className="max-w-6xl mx-auto">

<h2 className="text-3xl text-center mb-6">
Certifications
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

<div className="bg-white p-8 rounded-2xl shadow-md text-center">
<h3 className="font-semibold text-lg">
Certification Title
</h3>
<p className="text-gray-500 text-sm mt-2">
Description of certification or professional training.
</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-md text-center">
<h3 className="font-semibold text-lg">
Certification Title
</h3>
<p className="text-gray-500 text-sm mt-2">
Description of certification or professional training.
</p>
</div>

</div>

</div>

</motion.section>



{/* CONTACT */}

<section id="contact" className="py-24 text-center bg-[#E6F4F1]">

<div className="max-w-6xl mx-auto">

<h2 className="text-3xl mb-6">
Contact
</h2>

<p>Email: [email@example.com]</p>

<p className="mt-2">
Location
</p>

</div>

</section>



{/* PHOTO GALLERY */}

<section className="py-24 overflow-hidden">

<h2 className="text-3xl text-center mb-12">
Community Programs
</h2>

<div className="relative w-full overflow-hidden">

<div className="flex gap-6 w-max animate-scroll">

<img src="/photoslide/sample1.jpeg" className="w-[320px] h-[220px] object-cover rounded-xl"/>
<img src="/photoslide/sample2.jpeg" className="w-[320px] h-[220px] object-cover rounded-xl"/>
<img src="/photoslide/sample3.jpeg" className="w-[320px] h-[220px] object-cover rounded-xl"/>

</div>

</div>

</section>


</motion.main>
)
}