import './Page.css';

export default function Page(props) {
    const {name, pageName, page, images, activePage, setActivePage, aspectRatio} = props;

    const imgName = pageName === "internal" ? "internal" : "planet";
    const isMobile = aspectRatio <= .6;
    
    let classNames = {
        overview: "page-button page-button-active",
        structure: "page-button",
        geology: "page-button"
    }
    switch(activePage){
        case "Structure":
            classNames = {
                overview: "page-button",
                structure: "page-button page-button-active",
                geology: "page-button"
            }
            break;
        
        case "Surface":
            classNames = {
                overview: "page-button",
                structure: "page-button",
                geology: "page-button page-button-active"
            }
            break;

        default:
            classNames = {
                overview: "page-button page-button-active",
                structure: "page-button",
                geology: "page-button"
            }
    }
    
    return (
        <div className='Page'>
            <div className='buttons-div'>
                <button className={classNames.overview} onClick={() => setActivePage("Overview")}>
                    {!isMobile && <span>01</span>}
                    Overview
                </button>
                <button className={classNames.structure} onClick={() => setActivePage("Structure")}>
                    {!isMobile && <span>02</span>}
                    {!isMobile && "Internal"} Structure
                </button>
                <button className={classNames.geology} onClick={() => setActivePage("Surface")}>
                    {!isMobile && <span>03</span>}
                    Surface {!isMobile && "Geology"}
                </button>
            </div>
            
            <div className='image-div'>
                <img className='planet-image' src={`assets/${images[imgName]}`}/>
                {pageName === 'geology' && <img className='geo-image' src={`assets/${images.geology}`} />}
            </div>

            <div className='content-div'>
                <h1 className='planet-name'>{name}</h1>

                <p className='page-content'>{page.content}</p>

                <p className='source'>Source:
                    <a href={page.source}>Wikipedia</a>
                    <img src='assets/icon-source.svg' />
                </p>
            </div>

        </div>
    )
}