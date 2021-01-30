import config from '../app.config.json';
import AvatarList from '../components/AvatarList';
import Avatar from '../components/Avatar';

const story = {
  title: 'Example/Avatar List',
  component: AvatarList,
};
export default story;

const Template = (args) => <AvatarList {...args} />;

const avatarBaseUrl = 'util/images';

export const Example = Template.bind({});
Example.args = {
  heading: 'Judges',
  children: [(
    <Avatar
      className="mr-2"
      size="small"
      url={`${avatarBaseUrl}/judges/graham_elliot.png`}
    />
  ), (
    <Avatar
      className="mr-2"
      size="small"
      url={`${avatarBaseUrl}/judges/joe_bastianich.png`}
    />
  ), (
    <Avatar
      className="mr-2"
      size="small"
      url={`${avatarBaseUrl}/judges/gordon_ramsay.png`}
    />
  )]
};
