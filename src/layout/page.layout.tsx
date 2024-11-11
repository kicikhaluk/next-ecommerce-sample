import { Flex } from '@/components';
import Header from './header/header.layout';

interface IPageLayout {
  children: React.ReactNode | React.ReactNode[];
}

const PageLayout = async ({ children }: IPageLayout) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Flex as='footer' alignItems='center' justifyContent='center'>
        Footer
      </Flex>
    </>
  );
};

export default PageLayout;
