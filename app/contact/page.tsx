import Header from "@/components/Navbar/HomeNav"
import Contact from "@/components/Contact/Contact"
import Footer from "@/components/Footer/Footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Contact Form Section */}
      <Contact />

      <Footer />
    </main>
  )
}
