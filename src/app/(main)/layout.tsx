import Header from "@/layout/Header"
import Footer from "@/layout/Footer"
import { MainContext } from "@/context/MainContex"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col h-screen'>
      <MainContext>
        < Header />
        <div className="mt-[65px] lg:mt-[64px]">
          {children}
        </div>
        < Footer />
      </MainContext>
    </div>
  )
}