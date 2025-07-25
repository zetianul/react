// @compilationMode:"all" @inferEffectDependencies @panicThreshold:"none" @noEmit
import {print} from 'shared-runtime';
import {AUTODEPS} from 'react';
import useEffectWrapper from 'useEffectWrapper';

function Foo({propVal}) {
  'use memo';
  const arr = [propVal];
  useEffectWrapper(() => print(arr), AUTODEPS);

  const arr2 = [];
  useEffectWrapper(() => arr2.push(propVal), AUTODEPS);
  arr2.push(2);

  return {arr, arr2};
}

export const FIXTURE_ENTRYPOINT = {
  fn: Foo,
  params: [{propVal: 1}],
  sequentialRenders: [{propVal: 1}, {propVal: 2}],
};
