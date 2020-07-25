import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsPreview } from "../../redux/shop/shop.selector";
import {CollectionsOverviewContainer} from "./collections-overview.styles"

import CollectionPreview from "../collection-preview/CollectionPreview";
import "./collections-overview.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsPreview,
});

export default connect(mapStateToProps, null)(CollectionsOverview);
