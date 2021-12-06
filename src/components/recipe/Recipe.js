import React from 'react';
import './recipe.css';

export const recipes = [
    {
        //--shortbread
        imageSrc: 'https://www.acceptcookies.uk/1images/photos/biscuits/shortbread.jpg',
        name: 'Shortbread',
        link: 'https://www.acceptcookies.uk/1biscuits/shortbread.html'
    },
    //--cookies
    {
        imageSrc: 'https://www.acceptcookies.uk/1images/photos/biscuits/chocolateChip.jpg',
        name: 'Chocolate Chip Cookies',
        link: 'https://www.acceptcookies.uk/1biscuits/chocolateChipCookies.html'
    },
    //--raspberry
    {
        imageSrc: 'https://www.acceptcookies.uk/1images/photos/biscuits/Hobnob_270x270.jpg',
        name: 'Raspberry Crunch',
        link: 'https://www.acceptcookies.uk/1biscuits/raspberryCrunch.html'
    },
    //--lemon
    {
        imageSrc: 'https://www.acceptcookies.uk/1images/photos/biscuits/bluelemon.jpg',
        name: 'Lemon & Blueberry',
        link: 'https://www.acceptcookies.uk/1biscuits/lemonBlueberry.html'
    }
]

// export function RecipeList() {
//     return (
//         <section className="recipelist">
//             {recipes.map((recipe) => {
//                 return (
//                     <Recipe {...recipe}></Recipe>
//                 );
//             })}
//         </section>
//     );
// }

export const Recipe = (props) => {

    const { imageSrc, name, link } = props;

    return (
        <article className="Recipe" >
            <img src={imageSrc} alt="" />
            <a className="recipe-link"
                href={link}
                target="_blank"
                rel="noopener noreferrer">
                <h2>{name}</h2>
            </a>
        </article>
    );
}
