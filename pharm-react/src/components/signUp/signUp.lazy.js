import React, { lazy, Suspense } from 'react';

const LazysignUp = lazy(() => import('./signUp'));

const signUp = props => (
  <Suspense fallback={null}>
    <LazysignUp {...props} />
  </Suspense>
);

export default signUp;
