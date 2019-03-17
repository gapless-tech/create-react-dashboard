import { init } from '@rematch/core';
import selectPlugin from '@rematch/select';
import createLoadingPlugin from '@rematch/loading';
import models from './models';

const plugins = [selectPlugin(), createLoadingPlugin()];
const store = init({ plugins, models });

export const { select } = store;
export default store;
