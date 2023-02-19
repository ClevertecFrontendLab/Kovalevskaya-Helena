import { type FC } from 'react';
import { MainPageLayout } from 'components/layouts';
import { Terms } from 'components/terms';


interface TermsPageProps {
    content: string;
}


export const TermsPage: FC<TermsPageProps> = ({ content }) => (
    <MainPageLayout>
        <Terms contentView={content} />
    </MainPageLayout>
);
