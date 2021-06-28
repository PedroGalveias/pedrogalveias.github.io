import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList';
import {useEffect, useState} from 'react';
import {bachelorProjData, blockchainDevData, otherData, uniProjsData} from '../../portfolioData';

export default function Portfolio() {
    const [selected, setSelected] = useState("blockchainDev");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "blockchainDev",
            title: "Blockchain Dev"
        },
        {
            id: "bachelorProj",
            title: "Bachelor Project"
        },
        {
            id: "uniProjs",
            title: "Uni Projects"
        },
        {
            id: "other",
            title: "Other"
        }
    ]

    useEffect(() => {
        switch (selected) {
            case "blockchainDev":
                setData(blockchainDevData);
                break;

            case "bachelorProj":
                setData(bachelorProjData);
                break;

            case "uniProjs":
                setData(uniProjsData);
                break;

            case "other":
                setData(otherData);
                break;

            default:
                setData(blockchainDevData);
                break;
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected}
                                   id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img
                            src={d.img}
                            alt=""
                        />
                        <h3>{d.title}</h3>
                    </div>
                ))};
            </div>
        </div>
    )
}
