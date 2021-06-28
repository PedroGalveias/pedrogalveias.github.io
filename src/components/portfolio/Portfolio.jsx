import './portfolio.scss'

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Ethereum</li>
                <li>Blockchain Dev</li>
                <li>Bachelor's Project</li>
                <li>Uni Projects</li>
                <li>Other</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/256px-Ethereum_logo_2014.svg.png" alt=""/>
                    <h3>Blockchain</h3>
                </div>
                <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/256px-Ethereum_logo_2014.svg.png" alt=""/>
                    <h3>Blockchain</h3>
                </div>
                <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/256px-Ethereum_logo_2014.svg.png" alt=""/>
                    <h3>Blockchain</h3>
                </div>
                <div className="item">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/256px-Ethereum_logo_2014.svg.png" alt=""/>
                    <h3>Blockchain</h3>
                </div>
            </div>
        </div>
    )
}
