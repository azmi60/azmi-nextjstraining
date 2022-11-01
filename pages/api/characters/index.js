import { characters } from '../../../characters'

export default function handler(_, res) {
  res.status(200).json(characters);
}
