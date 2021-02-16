import SiteHeader from '../components/SiteHeader';

const story = {
  title: 'Example/Site Header',
  component: SiteHeader,
};

const Template = (args) => (
  <div class="bg-gray-200 p-10">
    <SiteHeader {...args}></SiteHeader>
  </div>
);

export default story;

export const Example = Template.bind({});

Example.args = {};
