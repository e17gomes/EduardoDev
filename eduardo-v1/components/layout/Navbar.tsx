'use client'
import { useState, useEffect } from "react"
import { Drawer } from "vaul"
import Link from "next/link"
import { Github, Linkedin, Menu, X, } from "lucide-react"
import { usePathname } from "next/navigation"
import Logo from "../ui/logo"
import { routes } from "@/constants/routes"
import { Button }from "../ui/button"
import { motion } from "framer-motion"





///// Desktop NavBar
const NavDesktop = () => {
    const pathname = usePathname()
        
    return (
        <motion.header
        initial={{opacity:0, y: -20}}
        whileInView={{opacity:1, y:0}}
        exit={{opacity:0}}
        transition={{duration:0.5}}
        className="sticky top-0 border-b p-6 flex items-center justify-between select-none bg-inherit/90 backdrop-blur z-50">
            <nav className="px-2 flex items-center gap-10">
                <Link href={'/'} >
                <Logo.desk/>
                </Link>
            <div
            className="space-x-7"
            >
                {routes.map((routes, index)=>(
                    <Link key={index} href={routes.link} className={`border-b ease-in-out  opacity-70 hover:opacity-100  p-2 ${routes.link === pathname? 'border-b-blue-500 rounded-r-lg opacity-100': 'border-b' } `}>
                        <span>
                        {routes.route}
                        </span>
                            
                    </Link>
                ))}
            </div>
            </nav>
            <nav className="space-x-2 flex">
            <button className="border hover:bg-gray-800 rounded-md hover:rounded-br-xl ease-in-out duration-500 h-[1.7rem] w-[1.7rem] flex items-center justify-center">
            <Link className="text-center" href={'https://www.github.com/e17gomes'} target="_blank">
                <Github size={19}/> 
                </Link>
             </button>
             <button className="border hover:bg-gray-800 rounded-md hover:rounded-br-xl ease-in-out duration-500 h-[1.7rem] w-[1.7rem] flex items-center justify-center">
                <Link className="text-center" href={'https://www.github.com/e17gomes'} target="_blank">
                <Linkedin size={19}/> 
                </Link>
             </button>
            </nav>
        </motion.header>
    )
}

////// Mobile NavBar
const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false)

  
    return (
        <motion.header
        initial={{opacity:0, y: -20}}
        whileInView={{opacity:1, y:0}}
        exit={{opacity:0}}
        transition={{duration:0.5}}
        
        className="sticky top-0 left-0 right-0  p-4 shadow-md z-50 border-b backdrop-blur bg-inherit " >
        <nav className="flex justify-between items-center w-[92%] mx-auto select-none">
        <Link href={'/'}>
        <Logo.mobile/>
        </Link>

            <Drawer.Root direction="right" open={isOpen} onOpenChange={setIsOpen}>
                <Drawer.Trigger asChild>
                    <button className={`relative flex items-center justify-center cursor-pointer rounded-full `}>
                       
                    <div
                         className={`absolute flex items-center justify-center transform transition-transform duration-300 ease-in-out border rounded-full p-1 ${
                                isOpen ?  'opacity-0 scale-50' : 'opacity-100 scale-100'
                            }`}>
                        <Menu/>
                        </div>

                        <div
                         className={`absolute flex items-center justify-center transform transition-transform duration-300 ease-in-out border rounded-full p-1 ${
                                isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                            }`}>
                        <X/>
                        </div>
                    </button>
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Overlay className="fixed inset-0 bg-background/40 backdrop-blur" />
                 <Drawer.Content aria-describedby={'menu'} className="flex flex-col gap-10 px-4 h-full w-4/5 fixed bottom-0 top-[4.1rem] right-0 border-l bg-inherit">
                    <Drawer.Title></Drawer.Title>
                        <section className="flex flex-col space-y-3 ">
                            <Button>
                                Login
                            </Button>
                        </section>
                        {routes.map((route,key)=>(<Link
                        onClick={() => setIsOpen(false)}
                        href={route.link}
                        key={key} 
                        className="border-b border-blue-400 py-3 px-1 opacity-50 hover:opacity-100">{route.route}</Link>))}
                        <p className='m-auto my-20 p-4 bg-gray-900 rounded-full pulse w-fit border-double border opacity-50 hover:opacity-100 '>
                            Contate-me
                        </p>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>
        </nav>
    </motion.header>
    )

}
// Rendered Nav
const RenderedNavbar = () => {
    const [isLarge, setIsLarge] = useState<boolean | null>(null);

    useEffect(() => {
        const handleResize = () => setIsLarge(window.innerWidth > 768);

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isLarge === null) {
        return null;
    }

    return isLarge ? <NavDesktop /> : <NavMobile />;

}

export default RenderedNavbar;