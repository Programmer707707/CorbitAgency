import ContactUsDetails from "./components/ContactUsDetails";
import ContactUsForm from "./components/ContactUsForm";

const ContactUs = () => {
  return (
    <section id="contact" className="bg-dark text-white py-8 md:py-16">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ContactUsDetails/>
                <ContactUsForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactUs