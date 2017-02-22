import 'babel-polyfill';

const requireContext = require.context('./src', true, /\.test\.jsx?$/);
requireContext.keys().forEach(requireContext);