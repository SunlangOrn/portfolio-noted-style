import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-2xl scroll-mt-20 px-6 py-20">
      <h2 className="font-handwriting mt-2 text-5xl font-bold">Contact</h2>
      <p className="mt-4 text-neutral-600">
        Have a project or an opportunity? Send me a message.
      </p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}