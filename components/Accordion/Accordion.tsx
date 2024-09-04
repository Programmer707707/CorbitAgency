import AccordionItem from "./AccordionItem";

interface Questions{
    question: string,
    answer: string,
}

const Accordion = ({questions}: {questions: Questions[]}) => {
  return (
    <>
        <div className="grid gap-2 md:gap-4">
        {questions.map((q) => (
            <AccordionItem {...q} key={q.question} />
            ))}
        </div>
    </>
  )
}

export default Accordion