import json from '../../../interface/public/graph.json';

export default function handler(req, res) {
  res.status(200).json({ name: json })
}
