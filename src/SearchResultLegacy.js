import React, { useState, useEffect } from 'react';
import FakeData from './data.json';
import { Button } from 'react-materialize';

export default function SearchResults({searchData, title}) {

    const [watchTitle, setWatchTitle] = useState([]);// TODO: this holds added titles.

    const addTitle = () => {
        setWatchTitle(title.title);
    };

    return (
        // <div className='search-results'>
                // {searchData.map((title, index) => (
                //     <div className='li-title' key={title.mal_id}>
                //         <img src={title.image_url}></img>
                //         <div className='li-description'>
                //             <div className='description-title'>
                //                 <h2>{title.title}</h2>
                //             </div>
                //             <div className='description-synopsis'><p>{title.synopsis}</p></div>
                //         </div>
                //     </div>
                // ))}
                // {FakeData.map((title, index) => (
                    <div className='li-title'>
                        <img src={title.image_url}></img>
                        <div className='li-description'>
                            <div className='description-title'>
                                <h5>{title.title}</h5>
                            </div>
                            <div className='description-synopsis'>
                                <p>{title.synopsis}</p>
                            </div>
                            <div className='description-add'>
                                <Button 
                                    waves='light' 
                                    onClick={addTitle}
                                >add
                                </Button>
                            </div>
                        </div>
                    </div>
                // ))}
                
        // </div>
    );
}
