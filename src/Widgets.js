import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Widgets() {
    const newArticle = (heading, subtitle) =>(
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        
        </div>
    )

  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>Add to your feed</h2>
            <InfoIcon />
        </div>
        {newArticle('sacs is back','top news')}
        {newArticle('war is not good','peace is the goal')}
        {newArticle('solana could replace BTC on thr long run','news update')}
        {newArticle('Davido mocks cousin as uncle wins Osun PDP factional primary','The Nationa Newspaper')}
        {newArticle('Avalanche unveils $315 million to stimulate growth of subnets','nairametrics')}
        {newArticle('Africa Live: African leaders talk to Putin about Ukraine war','BBC Africa')}
        {newArticle('Uganda preachers who take religion to the streets of Kampala','BBC Africa')}

    </div>
  )
}

export default Widgets;