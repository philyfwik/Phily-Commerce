import React from "react";
import { render } from "react-dom";

import "./directory.styles.css";

import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      sections: [
        {
          title: 'flowers',
          imageUrl: 'https://images.squarespace-cdn.com/content/v1/5de2ad1424b1dd71d88f59da/1610994735175-MZ8SV6DKOXOGA61U4H86/IMG_4803.jpg?format=1000w',
          id: 1,
          linkUrl: 'shop/flowers'
        },
        {
          title: 'cakes',
          imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/digger-cake_0-c4711f0.jpg?quality=90&resize=440,400',
          id: 2,
          linkUrl: 'shop/cakes'
        },
        {
          title: 'gift baskets',
          imageUrl: 'https://cdn2.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/22_90864_30H_39_034x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
          id: 3,
          linkUrl: 'shop/gift-baskets'
        },
        {
          title: 'for her',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'for him',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({ title, imageUrl, id, size }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          ))
        }
      </div>
    );
  }
}

export default Directory;