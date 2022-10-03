import create from 'zustand';
import {nanoid} from 'nanoid';

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

export const useStore = create((set) => ({
  texture: 'dirt',
  cubes: [{
    key: nanoid(),
    pos: [1, 0.5, 0],
    texture: 'dirt'
  },
    {
      key: nanoid(),
      pos: [2, 0.5, 0],
      texture: 'wood'
    },
    {
      key: nanoid(),
      pos: [3, 0.5, 0],
      texture: 'glass'
    },
    {
      key: nanoid(),
      pos: [4, 0.5, 0],
      texture: 'log'
    },
    {
      key: nanoid(),
      pos: [5, 0.5, 0],
      texture: 'grass'
    }],
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          pos: [x, y, z],
          texture: prev.texture
        }
      ]
    }));
  },
  removeCube: (x, y, z) => {
    set((prev) => ({
      cubes: prev.cubes.filter(cube => {
        const [X, Y, Z] = cube.pos;
        return X !== x || Y !== y || Z !== z;
      })

    }));
  },
  setTexture: (texture) => {
    set(() => ({
      texture
    }));
  },
  saveWorld: () => {
    set((prev) => {
      setLocalStorage('cubes', prev.cubes);
    });
  },
  resetWorld: () => {
    set(() => ({
      cubes: []
    }));
  }
}));