import { FC } from "react"

interface IPropsComponent {
    text: string;
    color: string;
    backgroundColor: string;
    fontSize?: number;
}

export const Component : FC<IPropsComponent> = ({
    text, 
    color,
    backgroundColor,
    fontSize
}) => {
    return (
        <div style={{color: `${color}`, backgroundColor: `${backgroundColor}`, fontSize: `${fontSize || 1}rem`}}>
            <p>{text}</p>
        </div>
    )
}