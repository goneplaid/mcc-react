import AvatarList from '../AvatarList';
import Avatar from '../Avatar';

const story = {
  title: 'Example/Avatar List',
  component: AvatarList,
};
export default story;

const Template = (args) => <AvatarList {...args} />;

export const Example = Template.bind({});
Example.args = {
  heading: 'Judges',
  children: [(
    <Avatar
      className="mr-2"
      size="small"
      url="http://localhost:7000/assets/images/judges/graham_elliot.png"
    />
  ), (
    <Avatar
      className="mr-2"
      size="small"
      url="http://localhost:7000/assets/images/judges/joe_bastianich.png"
    />
  ), (
    <Avatar
      className="mr-2"
      size="small"
      url="http://localhost:7000/assets/images/judges/gordon_ramsay.png"
    />
  )]
};
