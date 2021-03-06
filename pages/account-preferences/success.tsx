import { WizardLayout } from 'components/layouts/WizardLayout';
import type { NextPage } from 'next';
import AUAlert from 'components/@gov.au/AUAlert';
import AUheading from 'components/@gov.au/AUheading';
import Link from 'next/link';
import styled from '@emotion/styled';
import DescripionList from 'components/DescriptionList';
import { Text, TextLink } from '@ag.ds-next/text';

const Split = styled.div`
  margin-top: 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Home: NextPage = () => (
  <WizardLayout
    title="What happens next?"
    backbreadcrumb={false}
    frontmatter={
      <AUAlert title="Your preferences were set successfully" type="success">
        <Text as="p">
          You&apos;ll receive updates from us based on your personalisation and notifications preferences.
        </Text>
      </AUAlert>
    }
  >
    <Split>
      <AUheading level={3} size="lg">
        Personalisation preferences
      </AUheading>
      <TextLink href="/todo">Change</TextLink>
    </Split>
    <DescripionList fixedTermWidth>
      <dt>Locations</dt>
      <dd>Riverina, NSW, Riverlands, SA</dd>

      <dt>Products</dt>
      <dd>Oranges, Grapefruit</dd>

      <dt>Roles in the supply chain</dt>
      <dd>Producers of agricultural products</dd>

      <dt>Destination country</dt>
      <dd>Zuy</dd>
    </DescripionList>

    <Split>
      <AUheading level={3} size="lg">
        Notification preferences
      </AUheading>
      <TextLink href="/todo">Change</TextLink>
    </Split>
    <DescripionList fixedTermWidth>
      <dt>Alerts and reminders</dt>
      <dd>Email</dd>

      <dt>Communications</dt>
      <dd>Email</dd>
    </DescripionList>

    <Split>
      <AUheading level={3} size="lg">
        Information sharing preferences
      </AUheading>
      <TextLink href="/todo">Change</TextLink>
    </Split>
    <DescripionList fixedTermWidth>
      <dt>Linked service</dt>
      <dd>NSW Department of Primary Industry</dd>

      <dt>Linked service</dt>
      <dd>South Australian Growers Association</dd>
    </DescripionList>
  </WizardLayout>
);

export default Home;
