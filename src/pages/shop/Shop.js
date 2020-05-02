import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import shopData from "./shopData";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: shopData,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  } 
}

export default Shop;
