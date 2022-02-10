import AUbutton from 'components/@gov.au/AUbutton';
import { WizardLayout } from 'components/layouts/WizardLayout';
import Link from 'next/link';
import type { NextPage } from 'next';
import AUformGroup from 'components/@gov.au/AUformGroup';
import AUcheckbox from 'components/@gov.au/AUcheckbox';
import { ButtonGroup } from 'components/button-group';
import Hr from 'components/Hr';
import { Navigator, serviceFinderPages } from 'components/wizard/navigator';

const Page: NextPage = () => (
  <WizardLayout
    title="Have you previously exported goods from Australia?"
    navigator={<Navigator pages={serviceFinderPages} progress={0} />}
    frontmatter={
      <div style={{ marginTop: '2em' }}>
        <strong>Service finder</strong>
      </div>
    }
  >
    <p style={{ fontSize: '1.2em' }}>This includes if someone else exports on your behalf.</p>

    <AUformGroup style={{ marginTop: '2em' }}>
      <AUcheckbox type="radio" name="previous_exporter" id="previous_no" label="No - I’m new to exporting" block />
      <AUcheckbox type="radio" name="previous_exporter" id="previous_yes" label="Yes - I’ve exported before" block />
    </AUformGroup>

    <Hr />

    <div style={{ marginTop: '3em' }}>
      <ButtonGroup>
        <Link passHref href="/service-finder/categories">
          <AUbutton link>Continue</AUbutton>
        </Link>
        <AUbutton as="secondary">Cancel</AUbutton>
      </ButtonGroup>
    </div>
  </WizardLayout>
);

export default Page;