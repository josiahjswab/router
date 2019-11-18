
import React, { useState, useEffect } from 'react';
import FakeData from './data.json';
import { Button } from 'react-materialize';

export default function SearchResults({searchData}) {

    const [watchTitle, setWatchTitle] = useState([]);

    const consoleThat = () => {
        setTimeout(function(){ console.log(watchTitle); }, 1000 );
    };

    useEffect(() => {
        //Callback watchTitle to App component.
    }, [watchTitle]);


    return (
        <div className='search-results'>
                {searchData.map((title, index) => (
                    <div className='li-title' key={title.mal_id}>
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
                                onClick={ () => setWatchTitle(prevWatchTitle) }
                            >add
                            </Button>
                        </div>
                    </div>
                </div>
                ))}
                {FakeData.map((title, index) => (
                    <div className='li-title' key={title.mal_id}>
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
                                    onClick={() => setWatchTitle([...watchTitle, title.title]) }
                                >add
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
                
        </div>
    );
}
