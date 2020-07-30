import React from 'react';
import { PrerenderedComponent } from 'react-prerendered-component';

type DynamicImport = () => Promise<{ default: React.FC }>;

const prefetchMap = new WeakMap();
const prefetchLazy = (LazyComponent: any) => {
  if (!prefetchMap.has(LazyComponent)) {
    prefetchMap.set(LazyComponent, LazyComponent._ctor());
  }
  return prefetchMap.get(LazyComponent);
};

export const prerenderedLazy = (dynamicImport: DynamicImport) => {
  const LazyComponent = React.lazy(dynamicImport);
  return React.memo((props) => (
    <PrerenderedComponent live={prefetchLazy(LazyComponent)}>
      <LazyComponent {...props} />
    </PrerenderedComponent>
  ));
};
