import React from 'react';
import SeasonPageHeader from '../components/SeasonPageHeader';

const story = {
  title: 'Example/Season Page Header',
  component: SeasonPageHeader,
};

const Template = (args) => (
  <div class="bg-gray-200 p-10">
    <SeasonPageHeader
      avatarUrl="/util/images/contestants/season_1/whitney_miller.jpg"
      seasonWinner="Whitney Miller"
      seasonNumber="1"
    />
  </div>
);

export default story;

export const Example = Template.bind({});
Example.args = {};
