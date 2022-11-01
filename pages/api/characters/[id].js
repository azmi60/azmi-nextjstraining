import { characters } from '../../../characters'

export default function handler(req, res) {
  const { id } = req.query;
  const character = characters.find((character) => character._id === id);
  res.status(200).json(character);
}
