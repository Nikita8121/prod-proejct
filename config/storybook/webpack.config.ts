import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoaders';
import webpack, { RuleSetRule } from 'webpack';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

  const rules = config.module.rules;

  // modify storybook's file-loader rule to avoid conflicts with svgr
  const fileLoaderRule = rules.find((rule) => (rule as any).test.test('.svg'));
  (fileLoaderRule as any).exclude = /\.svg$/;

  rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      },
    ],
  });

  config.module.rules.push(buildCssLoader(true));

  return config;
};
