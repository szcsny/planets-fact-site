import './Page.css';

export default function Page(props) {
    const {name, pageName, page, images} = props;

    const imgName = pageName === "internal" ? "internal" : "planet";
    
    return (
        <div className='Page'>
            <div className='image-div'>
                <img className='planet-image' src={`assets/${images[imgName]}`}/>
                {pageName === 'geology' && <img className='geo-image' src={`assets/${images.geology}`} />}
            </div>

            <h1 className='planet-name'>{name}</h1>

            <p className='page-content'>{page.content}</p>

            <p className='source'>Source:
                <a href={page.source}>Wikipedia</a>
                <img src='assets/icon-source.svg' />
            </p>
        </div>
    )
}