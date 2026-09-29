import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { experiences } from "@/config/experience";

export function ExperienceSection() {
    return (
        <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
            <h2 className="font-handwriting mt-2 text-5xl font-bold">Work Experience</h2>

            <Accordion className="mt-10 space-y-4">
                {experiences.map((exp) => (
                    <AccordionItem
                        key={exp.id}
                        value={exp.id}
                        className="rounded-lg border bg-neutral-50 px-6"
                    >
                        <AccordionTrigger className="hover:no-underline">
                            <span className="block text-left">
                                <span className="font-handwriting block text-2xl font-bold">
                                    {exp.company}
                                </span>
                                <span className="block text-neutral-600">{exp.role}</span>
                                <span className="mt-2 block text-sm text-neutral-500">
                                    {exp.period}
                                </span>
                            </span>
                        </AccordionTrigger>

                        <AccordionContent>
                            <ul className="list-disc space-y-2 pl-5 text-neutral-700">
                                {exp.highlights.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}