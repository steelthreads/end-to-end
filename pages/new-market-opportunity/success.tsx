import { WizardLayout } from 'components/layouts/WizardLayout';
import type { NextPage } from 'next';
import AUAlert from 'components/@gov.au/AUAlert';

const Home: NextPage = () => (
  <WizardLayout
    title="What happens next?"
    backbreadcrumb={false}
    frontmatter={
      <AUAlert title="Application submitted" type="success">
        <p>
          Your application to export navel oranges to Canada and Malaysia was submitted. The department will respond to
          your application within 2 business days.
        </p>

        <p>
          <strong>Reference: 76TH88IH</strong>
        </p>
      </AUAlert>
    }
    breadcrumbs={[
      {
        label: 'Home',
        href: '/todo',
      },
      { label: 'Apply to export navel oranges to Canada and Malaysia' },
    ]}
  >
    <p>
      We’ll respond to your application within 2 business days. If we need any further information from you, we’ll
      notify you by email.
    </p>
    <p>You can also track the progress of your application in your account.</p>
  </WizardLayout>
);

export default Home;
