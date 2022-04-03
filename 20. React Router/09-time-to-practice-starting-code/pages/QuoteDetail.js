import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1></h1>
      <p>{params.quoteID}</p>

      <Route path={`/quotes/${params.quoteID}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
