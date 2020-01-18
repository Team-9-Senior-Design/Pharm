import React, { lazy, Suspense } from 'react';

const LazyHeadline = lazy(() => import('./Headline'));

const Headline = props => (
  <Suspense fallback={null}>
    <LazyHeadline {...props} />
  </Suspense>
);

export default Headline;
