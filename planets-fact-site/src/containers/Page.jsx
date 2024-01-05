import './Page.css';

export default function Page(props) {
    const {name, imgName, page, images} = props;

    console.log(`../assets/${images[imgName]}`);
    
    return (
        <>
            <img src={`../../public/assets/${images[imgName]}`}/>
            <h1>{name}</h1>

            <p>{page.content}</p>

            <p>Source: <a href={page.source}>Wikipedia</a></p>
        </>
    )
}