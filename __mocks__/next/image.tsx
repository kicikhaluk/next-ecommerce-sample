import type { ImageProps, StaticImageData } from 'next/image';
import type { ComponentType, ReactElement } from 'react';

interface ESModuleDefault<T> {
  readonly __esModule: true;
  readonly default: T;
}

type StaticRequire = ImageProps['src'] extends
  | infer T
  | StaticImageData
  | string
  ? T
  : never;

const mapStaticImportToSrc = (
  staticImport: StaticImageData | StaticRequire
): string => {
  if ('default' in staticImport) {
    return staticImport.default.src;
  }
  return staticImport.src;
};

const mapNextImageSrcToString = (
  src: StaticImageData | StaticRequire | string
): string => {
  if (typeof src === 'string') {
    return src;
  }
  return mapStaticImportToSrc(src);
};

export default function MockNextImage({
  alt,
  height,
  src: nextImageSrc,
  width,
}: Readonly<ImageProps>): ReactElement {
  const imgSrc: string = mapNextImageSrcToString(nextImageSrc);
  return <img alt={alt} height={height} src={imgSrc} width={width} />;
}

jest.mock(
  'next/image',
  (): ESModuleDefault<ComponentType<ImageProps>> => ({
    __esModule: true,
    default: MockNextImage,
  })
);
