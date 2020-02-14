import React, { lazy, Suspense } from 'react';

const LazysecPage = lazy(() => import('./secPage'));

const secPage = props => (
  <Suspense fallback={null}>
    <LazysecPage {...props} />
  </Suspense>
);

export default secPage;
