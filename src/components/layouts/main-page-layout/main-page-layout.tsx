import { type FC, PropsWithChildren } from 'react';
import { PageContainer } from 'components/common';
import { Grid, GridColumn } from 'components/grid';
import { Menu } from 'components/menu';
import { useMedia } from 'hooks';

export const MainPageLayout: FC<PropsWithChildren> = ({ children }) => {
    const { sm, sx } = useMedia();

    const isMenuVisible = !sm && !sx;

    return (
        <PageContainer>
            <section className='main-page'>
                <Grid>
                    {isMenuVisible && (
                        <GridColumn width={3}>
                            <Menu testId='navigation-showcase' testBooksId='navigation-books' testTermsId='navigation-terms' testContractId='navigation-contract' />
                        </GridColumn>
                    )}
                    <GridColumn width={isMenuVisible ? 9 : 12}>
                        {children}
                    </GridColumn>
                </Grid>
            </section>
        </PageContainer>
    )
};


