
import "./styles.css"
export const Content = () =>{
    const content = [
        {
            id:1,
            titulo:'Hydrogen VS Electric Cars',
            paragrafo:'Will hydrogen-fueled cars ever catch up to EVs?'},
      
        {
            id:2,
            titulo:'The Downsides of AI Artistry',
            paragrafo:'What are the possible adverse effects of on-demand AI image generation?'},
      
        {
            id:3,
            titulo:'Is VC Funding Drying Up?',
            paragrafo:'Private funding by VC firms is down 50% YOY. We take a look at what that means.'}
    ]
    return(
        <div className="HpbodyContent">
            <div className="Hpcoluna1">
                <div className="Hpimg"></div>
                <div className="Hptext">
                     <h2>The bringht future of web 3.0?</h2>
                    <div className="HpParagrafo">
                        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>

            <div className="Hpcoluna2">
                <h2>New</h2>
                {content.map((obj)=>
                    <div className="Hpcontent" key={obj.id}>
                    <h3>{obj.titulo}</h3>
                    <p>{obj.paragrafo}</p>
                    </div>
                )}
            </div>
        </div>
    )
}