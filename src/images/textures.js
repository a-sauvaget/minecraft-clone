import {NearestFilter, TextureLoader} from 'three';

import {
  dirtImg,
  logImg,
  grassImg,
  glassImg,
  woodImg,
  stonebrickImg,
  leaveImg,
  stoneImg
} from './images';

const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);
const stonebrickTexture = new TextureLoader().load(stonebrickImg);
const leaveTexture = new TextureLoader().load(leaveImg);
const stoneTexture = new TextureLoader().load(stoneImg);

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
stonebrickTexture.magFilter = NearestFilter;
leaveTexture.magFilter = NearestFilter;
stoneTexture.magFilter = NearestFilter;

export {
  dirtTexture,
  logTexture,
  grassTexture,
  glassTexture,
  woodTexture,
  groundTexture,
  stonebrickTexture,
  leaveTexture,
  stoneTexture
};