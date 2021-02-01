import config from '../app.config.json';
import axios from "axios";
import JSONAPISerializer from 'jsonapi-serializer';

axios.defaults.baseURL = config.API_URL;

const { Deserializer } = JSONAPISerializer;

const SeasonsLoader = async function () {
  const rawSeasons = await axios.get('/seasons');
  const deserializer = new Deserializer();

  const dataSet = {
    data: rawSeasons.data.data,
    included: rawSeasons.data.included,
  };

  const seasons = await deserializer.deserialize(dataSet);

  return seasons;
};

export default SeasonsLoader;
