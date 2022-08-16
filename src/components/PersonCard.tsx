import { FC } from "react";
import { FaQuoteRight } from "react-icons/fa";


interface Props {
    id?: number;
    image: string;
    name: string;
    title: string;
    quote: string;}

export const PersonCard:FC<Props> = ({id, title, name, image, quote}) => {
  return (
    <>
        <img src={image} alt={name} className='person-img' />
        <h4>{name}</h4>
        <p className="title">{title}</p>
        <p className="text">{quote}</p>
        <FaQuoteRight className='icon' /></>
  )
}
