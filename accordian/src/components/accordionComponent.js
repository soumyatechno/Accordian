import React from 'react'
import AccordionItems from './accordionItems'
const accordionComponent = () => {

  const data = [
    {
      type:"Accordion Item #1",
      body:" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "
    },
    {
      type:"Accordion Item #2",
      body:" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "
    },
    {
      type:"Accordion Item #3",
      body:" It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "
    },
  ];
  return (
    <div>
      <AccordionItems title={data[0].type} content={data[0].body}/>
    </div>
  )
}

export default accordionComponent