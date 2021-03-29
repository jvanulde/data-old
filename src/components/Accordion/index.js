import React, { useState } from 'react';
import data from '../../../content/risk-profile-indicators.json';
import './accordian-styles.css'
const Accordion = () => {
    
    let AccordianPlus;

    const [active, setActive] = useState(0);

    const eventHandler = (e, accordian) => {
        e.preventDefault();
        setActive(accordian);
    }

    const accordianCount = (accordian) => {
        AccordianPlus = accordian + 1;
        return AccordianPlus;
    }

    return(
        <div className="accordion-content">
            <form>     
                { data.map((tab, accordian) => (
                    <div key={accordian}>
                        <h3 className="accordian-title">
                            <button 
                                onClick={(e) => eventHandler(e, accordian)}
                                className={ active === accordian ? 'active' : 'inactive'}
                                aria-expanded={ active === accordian ? 'true' : 'false' }
                                aria-controls={ 'sect-' + accordianCount(accordian) }
                                aria-disabled={ active === accordian ? 'true' : 'false' }
                                tabaccordian={accordianCount(accordian)}
                                id="button"
                            >
                                <span className="title-wrapper">{tab.title}
                                    <span className={ active === accordian  ? 'plus' : 'minus'}></span>
                                </span>  
                            </button>
                        </h3>
                        <div id={ 'sect-' + accordianCount(accordian) } className={ active === accordian  ? 'panel-open' : 'panel-close' }>
                            <table>
                                <tr>
                                <th style={{border: '1px solid black'}} scope="col" class="col-sm-6">View</th>
                                <th style={{border: '1px solid black'}} scope="col" class="col-sm-2">Category</th>
                                <th style={{border: '1px solid black'}} scope="col" class="col-sm-3">Indicator Name</th>
                                <th style={{border: '1px solid black'}} scope="col" class="col-sm-1">Measure</th>
                                </tr>
                                <td style={{border: '1px solid black'}}>{tab.view}</td>
                                {/* <td>{tab.category.values}</td> */}
                                <td></td>
                                <td></td>
                                {/* { tab.description } */}
                            </table>
                        </div>
                    </div>
                    ))
                }
            </form>
        </div>
    );
}

export default Accordion;