import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import withSpinner from "../../components/with-spinner/WithSpinner";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../collection/Collection";
import { fetchCollectionsAsyncStart } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching, selectIsCollectionLoaded } from "../../redux/shop/shop.selector";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

console.log(CollectionsOverviewWithSpinner);

class Shop extends React.Component {
  async componentDidMount() {
    const { fetchCollectionsAsyncStart } = this.props;

    await fetchCollectionsAsyncStart();
  }

  render() {
    const { match, isCollectionFetching,isCollectionLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsAsyncStart: () =>
    dispatch(fetchCollectionsAsyncStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
